import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "mobx-react";
import { HeadHTML } from "./components";
import store from "./stores";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <Provider rootStore={store}>
    <HeadHTML />
    <App />
  </Provider>
);
// eslint-disable-next-line no-console
reportWebVitals(console.log);
