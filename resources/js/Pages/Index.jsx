import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import FirstScreen from "../../Components/FirstScreen";

const Index = (props) => {
	console.log(props);
	return (
		<MainLayout>
			<FirstScreen />
		</MainLayout>
	);
};

export default Index;
