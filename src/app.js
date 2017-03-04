import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.scss';

class Application extends React.Component {
	constructor(props) {
    super(props);

	}

	render() {
		return (
			<div>
        Begin writing application code in src/app.js
      </div>
		);
	}
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.getElementById('app')
  );
});