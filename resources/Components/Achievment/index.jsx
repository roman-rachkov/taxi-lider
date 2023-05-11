import React from "react";
import { Icon } from "@iconify/react";
import classes from "./achievement.module.scss";

const Achievement = ({ title, children, icon }) => {
	return (
		<div className={classes.achievement}>
			<h4 className={classes.achievement__header}>{title}</h4>
			<p className={classes.achievement__description}>{children}</p>
			<img className={classes.achievement__icon} src={icon} alt={title} />
			{/*<Icon className={classes.achievement__icon} icon={icon} />*/}
		</div>
	);
};

export default Achievement;
