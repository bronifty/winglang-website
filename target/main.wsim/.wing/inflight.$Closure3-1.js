"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $http_Util, $invokeAndAssert, $website_url }) {
  class $Closure3 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      (await $invokeAndAssert((await $http_Util.get($website_url)), "Hello, Wing"));
    }
  }
  return $Closure3;
}
//# sourceMappingURL=inflight.$Closure3-1.js.map