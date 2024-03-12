"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $api_url, $expect_Util, $http_HttpMethod, $http_Util, $std_Json }) {
  class $Closure5 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const response = (await $http_Util.fetch(String.raw({ raw: ["", "/hello-static"] }, $api_url), ({"method": $http_HttpMethod.OPTIONS, "headers": ({["Origin"]: "https://example.com", ["hx-target"]: "hello"})})));
      (await $expect_Util.equal(response.status, 204));
      console.log(String.raw({ raw: ["headers: ", ""] }, ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(response.headers)));
      (await $expect_Util.equal(((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(response.headers, "access-control-allow-headers"), "*"));
      (await $expect_Util.equal(((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(response.headers, "access-control-allow-origin"), "*"));
      (await $expect_Util.equal(((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(response.headers, "access-control-allow-methods"), "POST"));
    }
  }
  return $Closure5;
}
//# sourceMappingURL=inflight.$Closure5-1.js.map