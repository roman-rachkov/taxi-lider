"use strict";

import React from "react";
import Header from "../../Components/Header";

const MainLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<footer className={"bg-gray-300 min-h-[100px]"}></footer>
		</div>
	);
};

export default MainLayout;
