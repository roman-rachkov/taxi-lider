import React from "react";

const Header = ({ children, level = 1 }) => {
	const Tag = "h" + level;
	return <Tag className={`text-center !mb-10`}>{children}</Tag>;
};

export default Header;
