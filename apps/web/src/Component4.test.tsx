import { jsx } from "@emotion/core";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import Component4 from "./Component4";

enzyme.configure({ adapter: new Adapter() });

describe("Component4", () => {
  it("renders in jsdom", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component4 />, div);
    ReactDOM.unmountComponentAtNode(div);
    shallow(<Component4 />).unmount();
  });

  it("renders in enzyme", () => {
    shallow(<Component4 />).unmount();
  });
});
