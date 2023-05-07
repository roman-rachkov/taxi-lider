import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import Logo from "../../images/Logo.svg";
import useDebounce from "@/Hooks/UseDebounce";
import classes from "./header.module.scss";

const Header = () => {
	const headerRef = useRef(null);

	const scrollChangeHandler = (e) => {
		let scrollTop = window.pageYOffset;
		if (scrollTop >= 150) {
			headerRef.current.classList.add(classes.scrolled);
		}
		if (scrollTop < 150) {
			headerRef.current.classList.remove(classes.scrolled);
		}
	};

	const debouncedScrollHandler = useDebounce(scrollChangeHandler, 200);

	useEffect(() => {
		window.addEventListener("scroll", debouncedScrollHandler);
	}, []);

	return (
		<header className={classes.header} ref={headerRef}>
			<nav className={"container"}>
				<Link href="#" className={classes.logo}>
					<img src={Logo} alt="Лидер" />
				</Link>
				<ul className={classes.menu}>
					<li className={classes.menu__item}>
						<Link href="#" className="menu__link">
							О нас
						</Link>
					</li>
					<li className={classes.menu__item}>
						<Link href="#" className="menu__link">
							Калькулятор заработка
						</Link>
					</li>
					<li className={classes.menu__item}>
						<Link href="#" className="menu__link">
							Как начать
						</Link>
					</li>
					<li className={classes.menu__item}>
						<Link href="#" className="menu__link">
							Вопросы и ответы
						</Link>
					</li>
					<li className={classes.menu__item}>
						<Link href="#" className="menu__link">
							Контакты
						</Link>
					</li>
				</ul>
				<Link href="#">
					Войти
					<Icon icon="material-symbols:login" color={"#4E556D"} />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
