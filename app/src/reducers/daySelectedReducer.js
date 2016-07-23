import { SELECT_DAY, SELECT_TODAY, INCREMENT_DATE, DECREMENT_DATE } from './../constants/actionConstants'
import moment from 'moment';

export default  (state = moment(), action = null) => {
    if (action.type === SELECT_DAY) {
        return moment(action.data);
    } else if (action.type === SELECT_TODAY) {
        return moment();
    } else if (action.type === INCREMENT_DATE) {
        //moment in  moment returns a clone
        return moment(state.add(1,action.viewType));
    }else if(action.type === DECREMENT_DATE) {
        return moment(state.subtract(1,action.viewType));
    }
    return state;
};
