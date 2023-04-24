import React from "react";
import InputMask from "react-input-mask";
import { useForm } from "@inertiajs/react";

const Index = () => {
	const { data, setData, post, processing, progress } = useForm({ phone: "" });

	function submit(e) {
		e.preventDefault();
		post(route("new-user"));
	}

	return (
		<>
			<h1>Title</h1>
			<form action="#" onSubmit={submit}>
				<InputMask
					mask={"+7 (999) 999-99-99"}
					name={"phone"}
					id={"phone"}
					autoFocus
					value={data.phone}
					onChange={(e) => setData("phone", e.target.value)}
				/>
				<label htmlFor={"phone"}>Номер телефона</label>
			</form>
		</>
	);
};

export default Index;
