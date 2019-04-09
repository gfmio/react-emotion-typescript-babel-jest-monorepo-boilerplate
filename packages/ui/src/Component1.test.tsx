import { jsx } from "@emotion/core";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import Component1 from "./Component1";

enzyme.configure({ adapter: new Adapter() });

describe("Component1", () => {
  it("renders in jsdom", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component1 />, div);
    ReactDOM.unmountComponentAtNode(div);
    shallow(<Component1 />).unmount();
  });

  it("renders in enzyme", () => {
    shallow(<Component1 />).unmount();
  });
});
