import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import ViteWebp from "vite-plugin-webp-generator";

export default defineConfig({
	plugins: [
		ViteWebp({
			extensions: ["png", "jpg", "jpeg"],
		}),
		laravel({
			input: "resources/js/app.jsx",
			refresh: true,
		}),
		react(),
	],
});
