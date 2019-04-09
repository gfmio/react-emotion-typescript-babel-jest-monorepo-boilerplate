import { jsx } from "@emotion/core";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import App from "./App";

enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders in jsdom", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
    shallow(<App />).unmount();
  });

  it("renders in enzyme", () => {
    shallow(<App />).unmount();
  });
});
