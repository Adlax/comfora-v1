import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ProductsProvider } from "./store/context/products_context";
import { FiltersProvider } from "./store/context/filters_context";
import { CartProvider } from "./store/context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ProductsProvider>
		<FiltersProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</FiltersProvider>
	</ProductsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
