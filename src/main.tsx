import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./baseComponents/theme/theme.provider.tsx";
import "./main.css";

if (process.env.NODE_ENV !== "production") {
	const { default: axe } = await import("@axe-core/react");
	axe(React, ReactDOM, 1000);
}

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element not found");
}
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark">
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
