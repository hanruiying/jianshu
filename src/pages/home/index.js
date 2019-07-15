import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as creatAction from './store/creatAction.js';
import ListItem from './components/listItem';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	LoadMore,
	BackTop
} from './style.js';
import BgTitle from '../../static/img/homeTitle.jpg';
class Home extends Component {
	handleBackTop = () => {
		window.scrollTo(0, 0);
	}
	componentDidMount () {
		window.addEventListener('scroll', this.props.handleScroll);
	}
	render() {
		console.log(this.props.scroll, 'this.props.scroll');
		return (
			<HomeWrapper>
				<HomeLeft>
					<img src={BgTitle} className='bgTitle'/>
					<ListItem></ListItem>
					<LoadMore onClick={this.props.handleLoad}>查看更多</LoadMore>
				</HomeLeft>
				<HomeRight>right</HomeRight>
				{this.props.scroll ? <BackTop onClick={this.handleBackTop}>回到顶部</BackTop> : null}
			</HomeWrapper>
		)
	}
}

const mapState = (state) => ({
	scroll: state.get('home').get('scroll')
})

const mapDispatch = (dispatch) => {
	return {
		handleLoad () {
			dispatch(creatAction.GetLoadMore());
		},
		handleScroll () {
			// console.log(document.documentElement.scrollTop, 'document');
			if (document.documentElement.scrollTop > 100) {
				dispatch(creatAction.handleScroll(true));
			} else {
				dispatch(creatAction.handleScroll(false));
			}
		}
	}
}

export default connect(mapState, mapDispatch)(Home);
