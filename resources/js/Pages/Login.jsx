import React from "react";
import InputMask from "react-input-mask";
import { Head, useForm } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import BlockHeader from "../../Components/BlockHeader/blockHeader";

const Login = () => {
	const { data, setData, post, processing, progress } = useForm({ phone: "" });

	function submit(e) {
		e.preventDefault();
		post(route("confirm-phone"));
	}

	return (
		<MainLayout>
			<BlockHeader>Вход/регистрация</BlockHeader>
			<form action="#" onSubmit={submit} className={"flex flex-col"}>
				<InputMask
					mask={"+7 (999) 999-99-99"}
					name={"phone"}
					id={"phone"}
					autoFocus
					value={data.phone}
					placeholder={"Номер Телефона"}
					onChange={(e) => setData("phone", e.target.value)}
					className={"border border-slate-400 rounded-lg px-4 py-2 block"}
					required
				/>
				<label htmlFor={"phone"} className={"hidden"}>
					Номер телефона
				</label>
				<button
					type={"submit"}
					className={"border rounded-lg px-4 py-2 block mt-5"}
				>
					Получить код
				</button>
			</form>
		</MainLayout>
	);
};

export default Login;
