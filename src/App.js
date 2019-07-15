import React from 'react';
import Header from './common/header';
// 下载redux、react-redux,使用redux存储状态值start
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
// 使用redux存储值end
import { GlobalStyle } from './style.js';
import { GlobalIconfont } from './static/iconfont/iconfont.js'; // 定义全局的iconfont样式
function App() {
  return (
  	<Provider store={ store }>
  	{
  	 //使用Provider来把store中的值传递给app里的所有组件，使所有组件都可以使用store中存储的值
  	}
		<div className="App">
			<GlobalStyle />
			<GlobalIconfont />
			{
				//把全局的覆盖样式放在所有代码的上面就能保证，样式可以覆盖所有的
			}
			<BrowserRouter>
				<div>
					<Header />
					<Route path='/login' exact component={Login}></Route>
					<Route path='/' exact component={Home}></Route>
					<Route path='/detail/:id' exact component={Detail}></Route>
				</div>
			</BrowserRouter>
		</div>
    </Provider>
  );
}

export default App;
