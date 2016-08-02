import Ajv from 'ajv'

export default (schema) => {
  const fields = Object.keys(schema.properties);
  const validate = buildValidationFn(schema);
  return {
    fields,
    validate
  }
}

function buildValidationFn(schema) {
  var ajv = new Ajv({allErrors: true}); // options can be passed, e.g. {allErrors: true}
  var validate = ajv.compile(schema);
  var errors = {};
  return (formValues) => {

    var valid = validate(formValues);
    if (valid) {
      return errors;
    }

    var errs = validate.errors;
    Object.keys(errs).forEach(k => {
      errors[[errs[k].params.missingProperty]] = errs[k].message;
    });
    return errors;
  }
}

