import React from 'react';
import Loadable from 'react-loadable';

// Loadable 使用起来很简单，只要传入加载组件的函数和加载组件过程中展示的“Loading”组件就可以了
// function MyLoadingComponent() {
//   return <div>Loading...</div>;
// }

const LoadableComponent = Loadable({
	loader: () => import('./'),
	loading () {
		return <div>Loading...</div>
	}
})

class MyComponent extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}

export default MyComponent;
