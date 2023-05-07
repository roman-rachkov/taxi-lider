import React from "react";

const HeaderTag = ({ children, className, level = 1 }) => {
	const Tag = "h" + level;
	return <Tag className={className}>{children}</Tag>;
};

export default HeaderTag;
