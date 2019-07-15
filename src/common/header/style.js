import styled from 'styled-components';
import logo from '../../static/img/logo.png';

export const HeaderWrapper = styled.div`
	height: 60px;
	width: 100%;
	background: #fff;
	position: relative;
	border-bottom: 1px solid #e5e5e5;
	min-width: 1200px;
`
export const Logo = styled.a`
	&.left{
		float: left;
	}
	height: 100%;
	width: 100px;
	background: url(${logo});
	background-size: 100%;
	margin-left: 20px;
`
export const Nav = styled.div`
	margin: auto;
	width: 700px;
	height: 100%;
	line-height: 60px;
`
export const NavItem = styled.div`
	margin-left: 20px;
	padding: 0 5px;
	&.left{
		float: left;
	}
	&.right{
		float: right;
	}
	&.login{
		color: #969696;
		font-size: 13px;
	}
	&.active{
		color: #ea6f5a;
	}
	&:hover{
		cursor: pointer;
		background: #f5f5f5;
	}
`
export const SearchWrapper = styled.div`
	position: relative;
	display: inline-block;
`
export const NavSearch = styled.input.attrs({
	placeholder: '请输入您想搜索的内容'
})`
	&.mySearch-enter{
		transition: all .2s ease-out;
	}
	&.mySearch-enter-active{
		width: 250px;
	}
	&.mySearch-exit{
		transition: all .2s ease-out;
	}
	&.mySearch-exit-active{
		width: 150px;
	}
	&.left{
		float: left;
	}
	&.focus{
		width: 250px;
	}
	margin-top: 15px;
	margin-left: 20px;
	width: 150px;
	padding: 0 10px;
	box-sizing: border-box;
	height: 30px;
	line-height: 30px;
	border-radius: 19px;
	border: none;
	outline: none;
	background: #eee;
	font-size: 12px;
	&::placeholder{
		color: #999;
	}
`
export const Navdrop = styled.div`
	position: absolute;
	top: 70px;
	overflow: hidden;
	left: 20px;
	width: 100%;
	border: 1px solid #e5e5e5;
	padding: 10px;
	border-radius: 6px;
`
export const Search = styled.span`
	float: left;
	font-size: 14px;
	line-height: 30px;
	color: #969696;
`
export const Change = styled.span`
	float: right;
	font-size: 13px;
	color: #969696;
	line-height: 30px;
	.iconfont{
		display: block;
		float: left;
		transition: all .2s ease-in;
		font-size: 12px;
	}
`
export const SearchWrap = styled.div`
	float: left;
`
export const SearchItem = styled.a.attrs({
	href: '#'
})`
	float: left;
	padding: 5px;
	line-height: 20px;
	height: 20px;
	margin-right: 10px;
	margin-top: 10px;
	border: 1px solid #b4b4b4;
	font-size: 12px;
	border-radius: 10px;
`
export const BtnWrapper = styled.div`
	float: right;
	overflow: hidden;
`

export const Register = styled.a`
	&.left{
		float: left;
	}
	width: 80px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    &:hover{
    	cursor: pointer;
    	color: #ec6149;
		border-color: #ec6149;
		background-color: rgba(236,97,73,.05);
    }
`
export const Write = styled.a`
	&.left{
		float: left;
	}
	float: right;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    &:hover{
    	cursor: pointer;
    }
`
