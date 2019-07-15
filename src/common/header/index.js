import React from 'react';
import { connect } from 'react-redux';
// 使用connect来接收store中存储的值
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Register,
	Write,
	BtnWrapper,
	SearchWrapper,
	Navdrop,
	Search,
	Change,
	SearchWrap,
	SearchItem
} from './style.js';
import { CSSTransition } from 'react-transition-group';
import * as creatAction from './store/creatAction.js'; 

class Header extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			page: 1,
			sumpage: 1
		}
	}
	handleClickChange = (icon) => {
		console.log(icon.currentStyle);
		let tranAngle = icon.currentStyle.transform.replace(/[^0-9]/ig, '');
		// console.log(tranAngle);
		// if (tranAngle) {
		// 	tranAngle = parseInt(tranAngle, 10);
		// } else {
		// 	tranAngle = 0;
		// }
		// icon.style.transform = 'rotate(' + tranAngle + 360 + 'deg)';
		// console.log(this.refs['icon'].style, 'ew');
	} 
	render () {
		let searchDrop;
		if (this.props.focued || this.props.mouseIn) {
			searchDrop = (
				<Navdrop onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
					<Search>热门搜索</Search>
					<Change onClick={this.handleClickChange}>
						<i className='iconfont' ref={(icon) => {this.icon = icon;}}>&#xe606;</i>
						换一批
					</Change>
					<SearchWrap>
						{
							this.props.list.map(item => {
								return <SearchItem key={item}>{item}</SearchItem>
							})
						}
					</SearchWrap>
				</Navdrop>
			)
		} else {
			searchDrop = null;
		}
		return (
			<div>
				<HeaderWrapper>
					<Logo className='left'/>
					<BtnWrapper>
						<Register className='left'>注册</Register>
						<Write className='left'>
							<i className='iconfont'>&#xe601;</i>
							写文章
						</Write>
					</BtnWrapper>
					<Nav>
						<NavItem className='left active'>
							<i className='iconfont'>&#xe61c;</i>首页
						</NavItem>
						<NavItem className='left'>
							<i className='iconfont'>&#xe815;</i>下载app
						</NavItem>
						<NavItem className='right login'>登录</NavItem>
						<NavItem className='right login'>
							<i className='iconfont'>&#xe600;</i>
						</NavItem>
						<CSSTransition
						in={this.props.focued}
						timeout={200}
						classNames='mySearch'
						>
							<SearchWrapper>
								<NavSearch
									className={this.props.focued?"focus" : ""}
									onFocus={this.props.handleFocus}
									onBlur={this.props.handleBlur}
								>	
								</NavSearch>
								{searchDrop}
							</SearchWrapper>
						</CSSTransition>
					</Nav>
				</HeaderWrapper>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	// 接收state里面的focued的值，并存储到props中，用this.props.focued的来进行数据的展示
	return {
		// 使用了immutable的fromJS存储值之后，要使用get('focued')来获取值
		focued: state.get('header').get('focued'),
		list: state.get('header').get('list'),
		mouseIn: state.get('header').get('mouseIn')
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		// 定义的props的两个函数进行数据的派发和改变，派发action
		handleFocus () {
			dispatch(creatAction.searchFocus());
			dispatch(creatAction.searchList());
		},
		handleBlur () {
			dispatch(creatAction.searchBlur());
		},
		handleMouseEnter () {
			dispatch(creatAction.mouseEnter());
		},
		handleMouseLeave () {
			dispatch(creatAction.mouseLeave())
		}
	}
}
// 用mapStateToProps来接收state中存储的值
// 用mapDispatchToProps来进行state中数据的改变派发
export default connect(mapStateToProps, mapDispatchToProps)(Header);
