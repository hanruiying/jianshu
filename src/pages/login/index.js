import React from 'react';
import {
	LoginWrapper
} from './style.js';
class Login extends React.Component{
	render () {
		return (
			<LoginWrapper>
				<input ref={(input) => this.input = input} placeholder='请输入用户名'/>
				<input ref={(pwd) => this.pwd = pwd} placeholder='请输入密码' type='password'/>
				<button onClick={() => {this.handleLogin(this.input, this.pwd)}}>登录</button>
			</LoginWrapper>
		)
	}
	handleLogin = (input, pwd) => {
		console.log(input.value, pwd.value, 'input, pwd');
	}
}

export default Login;