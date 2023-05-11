import React from "react";
import classes from "./blockHeader.module.scss";

const BlockHeader = ({ children, className, level = 2 }) => {
	const Tag = "h" + level;
	return (
		<Tag className={[className, classes["block-header"]].join(" ")}>
			{children}
		</Tag>
	);
};

export default BlockHeader;
