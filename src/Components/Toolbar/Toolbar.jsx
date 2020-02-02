import React from "react";

import "./Toolbar.css";

function Toolbar() {
	return (
		<section className="toolbar-container">
			<div className="search-container">
				<i className="material-icons">search</i>
				<input type="text" placeholder="Search Fonts" />
			</div>
			<div className="sample-text-container">
				<input type="text" placeholder="Type something" />
			</div>
			<div className="choose-size-container">
				<button>40px</button>
				<i className="material-icons">arrow_drop_down</i>
			</div>
			<div className="toggle-theme-container">
				<i className="material-icons">invert_colors</i>
			</div>
			<div className="toggle-view-container">
				<i className="material-icons view-list">view_list</i>
				<i className="material-icons view-module">view_module</i>
			</div>
			<div className="refresh">
				<i className="material-icons">refresh</i>
			</div>
		</section>
	);
}

export default Toolbar;
