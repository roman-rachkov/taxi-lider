import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import FirstScreen from "../../Components/FirstScreen";
import Achievements from "../../Components/Achievements";
import Calculator from "../../Components/Calculator";

const Index = (props) => {
	console.log(props);
	return (
		<MainLayout>
			<FirstScreen />
			<Achievements />
			<Calculator />
		</MainLayout>
	);
};

export default Index;
