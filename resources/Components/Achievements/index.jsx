import React from "react";
import BlockHeader from "../BlockHeader";
import Achievement from "../Achievment";
import classes from "./achievements.module.scss";

import rubIcon from "../../images/rub-icon.svg";
import peopleIcon from "../../images/man-icon.svg";
import chartIcon from "../../images/chart-icon.svg";
import percentIcon from "../../images/percent-icon.svg";

const Achievements = () => {
	return (
		<article className={["container", classes.achievements].join(" ")}>
			<BlockHeader level={2}>Почему мы</BlockHeader>
			<div className={classes.achievements__items}>
				<Achievement title={15000} icon={rubIcon}>
					Рублей в сутки
					<br /> можно выводить
				</Achievement>
				<Achievement title={6000} icon={peopleIcon}>
					Довольных водителей <br />
					по всей стране
				</Achievement>
				<Achievement title={"4,9"} icon={chartIcon}>
					Рейтинг парка в агрегаторе
				</Achievement>
				<Achievement title={"0%"} icon={percentIcon}>
					Коммисия парка в <br />
					первый месяц и <span className={"gold"}>1%</span> далее
				</Achievement>
			</div>
		</article>
	);
};

export default Achievements;
