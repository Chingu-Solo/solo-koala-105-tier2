import React, { useEffect, useState } from "react";
import "./Main-container.css";

import Toolbar from "../Toolbar/Toolbar.jsx";

const API_KEY = process.env.REACT_APP_GOOGLE_FONTS_API_KEY;
console.log(API_KEY);

const MainContainer = () => {
	const [data, setData] = useState({
		items: [
			{
				family: null,
				category: null
			}
		]
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				let getGoogleFonts = await fetch(
					"https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAjfp0YTzzzGDEWaGuXoN4imwRA4bTSwrM&sort=popularity"
				);
				let googleFonts = await getGoogleFonts.json();
				console.log(googleFonts);
				setData(googleFonts);
				/* console.log(data.fonts); */
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<main className="main-container">
			<Toolbar />

			{data.items.map(f => (
				<div>
					<p>{f.family}</p>
					<p>{f.category}</p>
				</div>
			))}
		</main>
	);
};

export default MainContainer;
