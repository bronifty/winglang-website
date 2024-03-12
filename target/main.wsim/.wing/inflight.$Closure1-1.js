"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $counter }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      return ({"status": 200, "headers": ({["Content-Type"]: "text/html", ["Access-Control-Allow-Origin"]: "*"}), "body": String.raw({ raw: ["<div id=\"hello\" class=\"mt-4\">Hello ", "</div>"] }, (await $counter.inc()))});
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-1.js.map