"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure4Client = 
          require("/home/bro/codes/dev/website/target/test/main.wsim/.wing/inflight.$Closure4-1.js")({
            $api_url: process.env["WING_TOKEN_WSIM_ROOT_ENV1_CLOUD_API_ATTRS_URL"],
            $http_Util: require("/home/bro/.local/share/fnm/node-versions/v20.11.1/installation/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
            $invokeAndAssert: 
          (await (async () => {
            const $Closure2Client = 
          require("/home/bro/codes/dev/website/target/test/main.wsim/.wing/inflight.$Closure2-1.js")({
            $expect_Util: require("/home/bro/.local/share/fnm/node-versions/v20.11.1/installation/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/expect/assert.js").Util,
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
          })
        ;
            const client = new $Closure4Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};