import React from "react";
import { render } from "react-native-testing-library";

import CardMovie from "../CardMovie";

describe("CardMovie", () => {
  it("deve renderizar corretamente", () => {
    const tree = render(<CardMovie />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
