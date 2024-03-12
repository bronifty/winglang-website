"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $expect_Util }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(response, expected) {
      console.log(String.raw({ raw: ["response: ", " "] }, response.status));
      (await $expect_Util.equal(response.status, 200));
      $helpers.assert($helpers.eq(response.body.includes(expected), true), "response.body?.contains(expected) == true");
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-1.js.map