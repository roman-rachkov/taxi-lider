import "./bootstrap";
import "../css/app.scss";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { StrictMode } from "react";

import.meta.glob(["../images/**", "../fonts/**"]);

const appName =
	window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.jsx`,
			import.meta.glob("./Pages/**/*.jsx")
		),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(
			<StrictMode>
				<App {...props} />
			</StrictMode>
		);
	},
	progress: {
		color: "#4B5563",
	},
});
