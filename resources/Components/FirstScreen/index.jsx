import React from "react";
import banner from "../../images/banner.webp";
import HeaderTag from "../HeaderTag";
import classes from "./screen.module.scss";
import { Link } from "@inertiajs/react";

const FirstScreen = () => {
	return (
		<article className={classes.main}>
			<img
				src={banner}
				alt="Таксопаорк Лидер"
				className={classes.main__banner}
			/>
			<div className="container">
				<div className={classes.main__offer}>
					<h1
						className={[classes.main__header, classes["offer-header"]].join(
							" "
						)}
					>
						<span className={classes["offer-header__small"]}>Заработок до</span>
						<span className={classes["offer-header__cost"]}>12000₽</span> в день
					</h1>
					<p className={classes.main__description}>
						Мы уважаем труд наших водителей и обеспечиваем моментальные выплаты
						на карту в любое время, отзывчивую поддержку от парка 24/7 и большое
						количество заказов!
					</p>
					<Link href="#" className={["btn", classes.main__btn].join(" ")}>
						Начать работать
					</Link>
					{/*<HeaderTag>Таксопарк Лидер</HeaderTag>*/}
					{/*<p className="main__info">*/}
					{/*	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta*/}
					{/*	excepturi laborum laudantium odit, praesentium quam reiciendis rem*/}
					{/*	repudiandae sed sunt vel vero! At deserunt enim excepturi expedita,*/}
					{/*	magni quia velit.*/}
					{/*</p>*/}
					{/*<button className={"main__reg-btn rounded-lg border px-3 py-2"}>*/}
					{/*	Начать работать*/}
					{/*</button>*/}
				</div>
			</div>
		</article>
	);
};

export default FirstScreen;
