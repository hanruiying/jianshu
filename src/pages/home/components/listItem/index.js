import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GET_HEADER_INFO } from '../../store/actionTypes.js';
import { 
	ItemWrapper,
	ListTitle,
	ListContent,
	ListDetail,
	ListImg
} from '../../style.js';
import * as creatAction from '../../store/creatAction.js';

class ListItem extends Component{
	componentDidMount () {
		this.props.getInfo();
	}
	render () {
		let { list } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link to={'/detail/' + item.get('id')}>
								<ItemWrapper key={index}>
									<ListContent>
										<ListTitle>{item.get('title')}</ListTitle>
										<ListDetail>{item.get('content')}</ListDetail>
										<ListImg>
											<img src={item.get('img')} />
										</ListImg>
									</ListContent>
								</ItemWrapper>
							</Link>
						)
					})
				}
			</div>
		)
	}
}

const mapState = (state) => {
	return {
		list: state.get('home').get('list')
	}
}

const mapDispatch = (dispatch) => ({
	getInfo () {
		dispatch(creatAction.GetHomeInfo());
	}
})

export default connect(mapState, mapDispatch)(ListItem);
