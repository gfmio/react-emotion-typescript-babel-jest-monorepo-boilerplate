import { jsx } from "@emotion/core";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.createElement("main");
root.id = "root";
document.body.appendChild(root);
ReactDOM.render(<App />, root);
