import {config, updateConfigs } from './configValues';
import moment from 'moment';

export default function(dispatch, ownProps) {
  if(config.initialized){ return; }

  var newConfig = ownProps.config;
  newConfig.initialized = true;
  var _config = updateConfigs(newConfig);

  _config.retrieveDataAction(moment().startOf('month'), moment().endOf('month'), dispatch);
}
