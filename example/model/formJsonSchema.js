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
  var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
  var validate = ajv.compile(schema);
  return (formValues) => {
    var valid = validate(formValues);
    if (valid) {
      return {};
    }
    var errs = validate.errors;
    var fu = Object.keys(errs).map(k => {
      return {
        [errs[k].params.missingProperty]: errs[k].message}
      });
    console.log('==========errs=========');
    console.log(errs);
    console.log('==========END errs=========');
    console.log('==========fu=========');
    console.log(fu);
    console.log('==========END fu=========');
    return fu;
  }
}

