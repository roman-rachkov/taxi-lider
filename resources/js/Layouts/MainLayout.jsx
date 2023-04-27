import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "../../images/Logo.svg";

const MainLayout = ({ children }) => {
	return (
		<div className={"flex flex-col min-h-screen "}>
			<header className={"bg-yellow-300 py-3 sticky top-0 left-0"}>
				<nav className={"container mx-auto"}>
					<Link href="#" className="logo">
						<img
							src={Logo}
							alt="Лидер"
							style={{ height: "80px", width: "auto" }}
						/>
					</Link>
				</nav>
			</header>
			<main className={"container mx-auto px-2 py-2 min-h-screen"}>
				{children}
			</main>
			<footer className={"bg-gray-300 min-h-[100px]"}></footer>
		</div>
	);
};

export default MainLayout;
