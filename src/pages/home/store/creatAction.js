import axios from 'axios';
import { fromJS } from 'immutable';
import { GET_HEADER_INFO, GET_LOAD_MORE, HOME_SCROLL } from './actionTypes.js';

const homeInfo = (data) => ({
	type: GET_HEADER_INFO,
	list: data
})

const loadInfo = (data) => {
	return {
		type: GET_LOAD_MORE,
		list: data
	}
}

export const GetHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			// console.log(res);
			dispatch(homeInfo(res.data));
		}).catch(err => {
			console.log(err);
		})
	}
}

export const GetLoadMore = () => {
	return (dispatch) => {
		axios.get('/api/homeLoad.json').then((res) => {
			console.log(res, 'res');
			dispatch(loadInfo(res.data));
		}).catch(err => {
			console.log(err);
		})
	}
}

export const handleScroll = (data) => ({
	type: HOME_SCROLL,
	show: data
})