import { jsx } from "@emotion/core";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import Component2 from "./Component2";

enzyme.configure({ adapter: new Adapter() });

describe("Component2", () => {
  it("renders in jsdom", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component2 />, div);
    ReactDOM.unmountComponentAtNode(div);
    shallow(<Component2 />).unmount();
  });

  it("renders in enzyme", () => {
    shallow(<Component2 />).unmount();
  });
});
