import { jsx } from "@emotion/core";
import { FC, Fragment } from "react";
import Component1 from "ui/dist/Component1";
import Component2 from "ui/dist/Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

const App: FC = () => (
  <Fragment>
    <div>
      <Component1>Component1</Component1>
      <Component2>Component2</Component2>
      <Component1>Component1</Component1>
    </div>
    <div>
      <Component3>Component3</Component3>
      <Component4>Component4</Component4>
      <Component3>Component3</Component3>
    </div>
  </Fragment>
);

export default App;
