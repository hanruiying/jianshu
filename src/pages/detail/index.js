import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [{'title': 'desav', 'content': 'dabfdb'}]
		}
	}
	componentDidMount () {
		axios.get('/api/detail.json/' + this.props.match.params.id).then(res => {
			this.setState({ 
				list: res.data
			})
		}).catch(err => {
			console.log(err, 'err');
		})
	}
	render() {
		let { list } = this.state;
		console.log(list, 'list');
			return (
				<div>
					<h1>{list[0].title}</h1>
					<p>{list[0].content}</p>
				</div>
			)
	}
}

export default withRouter(Detail);
