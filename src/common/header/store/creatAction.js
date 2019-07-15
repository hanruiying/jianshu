import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_LIST, MOUSE_LEAVE, MOUSE_ENTER} from './actionType.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const search_List = (data) => ({
	type: SEARCH_LIST,
	list: fromJS(data)
})

export const searchFocus = () => ({
	type: SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: SEARCH_BLUR
})

export const mouseEnter = () => ({
	type: MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: MOUSE_LEAVE
})

export const searchList = () => {
	return (dispatch) => {
		axios.get('/api/index.json').then(res => {
			// console.log(res.data, 'res.data');
			dispatch(search_List(res.data));
		}).catch(err => {
			console.log(err, 'err');
		})
	}
}