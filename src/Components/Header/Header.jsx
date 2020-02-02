import React, { useState } from "react";
import "./Header.css";

function Header() {
	return (
		<nav className="header-container">
			<div className="nav-logo">
				<h1>
					Google<span>Font</span>
				</h1>
			</div>
			<ul className="nav-menu">
				<li>
					<a href="#">Catalog</a>
				</li>
				<li>
					<a href="#">Featured</a>
				</li>
				<li>
					<a href="#">Articles</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
