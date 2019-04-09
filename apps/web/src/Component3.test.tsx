import { jsx } from "@emotion/core";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import Component3 from "./Component3";

enzyme.configure({ adapter: new Adapter() });

describe("Component3", () => {
  it("renders in jsdom", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component3 />, div);
    ReactDOM.unmountComponentAtNode(div);
    shallow(<Component3 />).unmount();
  });

  it("renders in enzyme", () => {
    shallow(<Component3 />).unmount();
  });
});
