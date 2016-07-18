/**
 * Created by rharik on 5/31/16.
 */

import { connect } from 'react-redux'
import {getWeek, amendTasks} from './../utils/calendarUtils';
import {process} from './../utils/widthAndColumn';
import { bindActionCreators } from 'redux'
import Week from '../components/Week'
import {selectSlot, selectTask} from './../actions/eventActions';


export default connect()(Week);
