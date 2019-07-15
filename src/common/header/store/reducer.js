import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_LIST, MOUSE_LEAVE, MOUSE_ENTER } from './actionType.js';
import { fromJS } from 'immutable';
// 引入immutable来使数据成为不可以改变的数据
const defaultState = fromJS({
	focued: false,
	list: [],
	mouseIn: false
})

export default (state=defaultState, action) => {
	switch (action.type) {
		case SEARCH_FOCUS:
			return state.set('focued', true);
		case SEARCH_BLUR:
			return state.set('focued', false);
		case SEARCH_LIST:
			return state.set('list', action.list);
		case MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case MOUSE_ENTER:
			return state.set('mouseIn', true);
		default:
			return state;
	}
}