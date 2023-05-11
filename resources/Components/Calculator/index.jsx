import React, { useState } from "react";
import BlockHeader from "../BlockHeader";
import classes from "./calculator.module.scss";
import { Icon } from "@iconify/react";

const Calculator = () => {
	const minHours = 1;
	const maxHours = 10;
	const tariffs = {
		Эконом: 350,
		Комфорт: 650,
		"Комфорт+": 800,
		Бизнес: 1200,
	};

	const [hours, setHours] = useState(1);
	const [tariff, setTariff] = useState(0);

	function declOfNum(number, words) {
		return words[
			number % 100 > 4 && number % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
		];
	}

	const addHoursBtnClick = (e) => {
		e.preventDefault();
		if (hours <= minHours) {
			return;
		}
		setHours((hours) => hours - 1);
	};

	const subHoursBtnClick = (e) => {
		e.preventDefault();
		if (hours >= maxHours) {
			return;
		}
		setHours((hours) => hours + 1);
	};

	return (
		<article className={["container", classes.calculator].join(" ")}>
			<BlockHeader>Сколько я смогу заработать</BlockHeader>
			<div className={classes.calculator__blocks}>
				<div className={classes.calculator__block}>
					<span className={classes.calculator__header}>Тарифы</span>
					<div className={classes.calculator__wrapper}>
						<button
							className={[
								"btn",
								classes.calculator__btn,
								classes["calculator__btn-left"],
							].join(" ")}
							onClick={() =>
								setTariff((t) => (t <= 0 ? tariffs.length - 1 : t - 1))
							}
						>
							<Icon icon={"material-symbols:arrow-right-alt"} hFlip={true} />
						</button>
						<p className={classes.calculator__label}>
							{Object.keys(tariffs)[tariff]}
						</p>
						<button
							className={[
								"btn",
								classes.calculator__btn,
								classes["calculator__btn-right"],
							].join(" ")}
							onClick={() =>
								setTariff((t) => (t >= tariffs.length - 1 ? 0 : t + 1))
							}
						>
							<Icon icon={"material-symbols:arrow-right-alt"} />
						</button>
					</div>
				</div>
				<div className={classes.calculator__block}>
					<span className={classes.calculator__header}>Часов в день</span>
					<div className={classes.calculator__wrapper}>
						<button
							className={[
								"btn",
								classes.calculator__btn,
								classes["calculator__btn-left"],
							].join(" ")}
							onClick={addHoursBtnClick}
						>
							<span
								style={{
									display: "block",
									height: "6px",
									width: "36px",
									backgroundColor: "#fff",
								}}
							></span>
						</button>
						<p className={classes.calculator__label}>
							{hours} {declOfNum(hours, ["час", "часа", "часов"])}
						</p>
						<button
							className={[
								"btn",
								classes.calculator__btn,
								classes["calculator__btn-right"],
							].join(" ")}
							onClick={subHoursBtnClick}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Calculator;
