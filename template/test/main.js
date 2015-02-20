"use strict";

import main from "../src/main";
import expect from "expect";

describe("{{basename}}", () => {

  it("should expose 'hello'", () => {
    expect(main).toBeA(Function);
  });

});
