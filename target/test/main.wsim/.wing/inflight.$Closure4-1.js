"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $api_url, $http_Util, $invokeAndAssert }) {
  class $Closure4 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      (await $invokeAndAssert((await $http_Util.post(String.raw({ raw: ["", "/hello-static"] }, $api_url))), "Hello 0"));
    }
  }
  return $Closure4;
}
//# sourceMappingURL=inflight.$Closure4-1.js.map