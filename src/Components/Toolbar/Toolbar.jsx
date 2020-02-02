import React from "react";

import "./Toolbar.css";

function Toolbar() {
	return (
		<section className="toolbar-container">
			<div className="search-container">
				<i class="material-icons">search</i>
				<input type="text" placeholder="Search Fonts" />
			</div>
			<div className="sample-text-container">
				<input type="text" placeholder="Type something" />
			</div>
			<div className="choose-size-container">
				<button>40px</button>
				<i class="material-icons">arrow_drop_down</i>
			</div>
			<div className="toggle-theme-container">
				<i class="material-icons">invert_colors</i>
			</div>
			<div className="toggle-view-container">
				<i class="material-icons view-list">view_list</i>
				<i class="material-icons view-module">view_module</i>
			</div>
			<div className="refresh">
				<i class="material-icons">refresh</i>
			</div>
		</section>
	);
}

export default Toolbar;
