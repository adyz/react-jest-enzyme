import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { App } from "./index";

configure({ adapter: new Adapter() });

describe("test", () => {
  it("is ok", () => {
    const app = shallow(<App />);
    expect(app.find("h2").text()).toBe(
      "Start editing to see some magic happen"
    );
  });
});
