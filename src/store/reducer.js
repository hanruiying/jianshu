// 因为reducers会存储很多个状态值，所以我们分别在各自的组件里存储各自的状态值，
// 用combineReducers来进行多个状态的存储和管理
// 安装redux-immutable,引入redux-immutable中的combineReducers
import { combineReducers } from 'redux-immutable';
import HeadReducer from '../common/header/store/reducer.js';
import HomeReducer from '../pages/home/store/reducer.js';

export default combineReducers({
	header: HeadReducer,
	home: HomeReducer
})