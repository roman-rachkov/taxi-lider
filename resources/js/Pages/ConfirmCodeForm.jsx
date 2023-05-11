import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import BlockHeader from "../../Components/BlockHeader/blockHeader";
import InputMask from "react-input-mask";
import { useForm } from "@inertiajs/react";

const ConfirmCodeForm = () => {
	const { data, setData, post, processing, progress } = useForm({ code: "" });

	function submit(e) {
		e.preventDefault();
		post(route("confirm-code"));
	}

	return (
		<MainLayout>
			<BlockHeader>Подтвердить код</BlockHeader>
			<form action="#" onSubmit={submit} className={"flex flex-col"}>
				<InputMask
					mask={"9999"}
					name={"code"}
					id={"code"}
					autoFocus
					value={data.code}
					placeholder={"Код подтвеждения"}
					onChange={(e) => setData("code", e.target.value)}
					className={"border border-slate-400 rounded-lg px-4 py-2 block"}
					required
				/>
				<label htmlFor={"phone"} className={"hidden"}>
					Код подтверждения
				</label>
				<button
					type={"submit"}
					className={"border rounded-lg px-4 py-2 block mt-5"}
				>
					Подтвердить телефон
				</button>
			</form>
		</MainLayout>
	);
};

export default ConfirmCodeForm;
