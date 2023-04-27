import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import Header from "../../Components/Header";
import { useForm } from "@inertiajs/react";

const Profile = ({ auth }) => {
	console.log(auth);
	const { data, setData, post, progress } = useForm({
		photos: "",
	});
	const submit = (e) => {
		e.preventDefault();
		post(route("profile.upload"));
	};
	return (
		<MainLayout>
			<Header>Профиль пользователя {auth.user.phone}</Header>
			<form action="#" onSubmit={submit}>
				<label className="block">
					<input
						type="file"
						multiple
						className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
						// value={data.files}
						onChange={(e) => setData("photos", e.target.files)}
					/>
				</label>
				{progress && (
					<progress value={progress.percentage} max="100">
						{progress.percentage}%
					</progress>
				)}
				<button type={"submit"}>Загрузить</button>
			</form>

			{auth.user.attachment.map((image) => {
				return <img key={image.id} src={`/storage/${image.path}`} />;
			})}
		</MainLayout>
	);
};

export default Profile;
