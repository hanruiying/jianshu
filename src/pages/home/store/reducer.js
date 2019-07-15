import {fromJS} from 'immutable';
import { GET_HEADER_INFO, GET_LOAD_MORE, HOME_SCROLL } from './actionTypes.js';

const defaultState = fromJS({
	list: [],
	scroll: false
})

export default (state=defaultState, action) => {
	switch (action.type) {
		case GET_HEADER_INFO:
			return state.set('list', fromJS(action.list));
		case GET_LOAD_MORE:
			return state.set('list', fromJS([...state.get('list').toJS(), ...action.list]));
		case HOME_SCROLL:
			return state.set('scroll', action.show);
		default: 
			return state;
	}
}
