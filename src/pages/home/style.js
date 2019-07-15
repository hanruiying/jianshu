import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	margin: auto;
	@media (min-width: 992px) {
		width: 960px;
	}
	@media (max-width: 1080px) {
		width: 750px;
	}
`

export const HomeLeft = styled.div`
	float: left;
	width: 70%;
	.bgTitle{
		width: 100%;
		border-radius: 6px;
		@media (min-width: 992px) {
			height: 270px;
		}
		@media (max-width: 1080px) {
			height: 210px;
		}
	}
`
export const ItemWrapper = styled.div`
	width: 100%;
	margin-top: 20px;
	position: relative;
`
export const ListContent = styled.div`
	width: 100%;
	padding-right: 150px;
	box-sizing: border-box;
`

export const ListTitle = styled.a`
	color: #333;
	font-size: 18px;
	line-height: 30px;
	font-weight: 700;
	margin-bottom: 10px;
`
export const ListDetail = styled.p`
	color: #999;
	font-size: 13px;
	line-height: 24px;
`
export const ListImg = styled.a`
	position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
	img{
		width:100%;
		height: 100%;
	}
`
export const LoadMore = styled.div`
	width: 100%;
	padding: 10px 15px;
	background: #a5a5a5;
	color: #fff;
	font-size: 12px;
	text-align: center;
	border-radius: 20px;
	margin: 30px 0;
	&:hover{
		cursor: pointer;
	}
`

export const HomeRight = styled.div`
	float: left;
	width: 30%;
`

export const BackTop = styled.div`
	position: fixed;
	right: 50px;
	bottom: 50px;
	width: 50px;
	// height: 150px;
	border-radius: 10px;
	line-height: 50px;
	text-align: center;
	color: #fff;
	font-size: 12px;
	background: #a5a5a5;
	&:hover{
		cursor: pointer;
	}
`