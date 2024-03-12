
"use strict";
"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure5Client = 
          require("/home/bro/codes/dev/website/target/test/main.wsim/.wing/inflight.$Closure5-1.js")({
            $api_url: process.env["WING_TOKEN_WSIM_ROOT_ENV2_CLOUD_API_ATTRS_URL"],
            $expect_Util: require("/home/bro/.local/share/fnm/node-versions/v20.11.1/installation/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/expect/assert.js").Util,
            $http_HttpMethod: {"GET": "GET","PUT": "PUT","DELETE": "DELETE","PATCH": "PATCH","POST": "POST","OPTIONS": "OPTIONS","HEAD": "HEAD",},
            $http_Util: require("/home/bro/.local/share/fnm/node-versions/v20.11.1/installation/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
            $std_Json: require("/home/bro/.local/share/fnm/node-versions/v20.11.1/installation/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure5Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
process.on("message", async (message) => {
  const { fn, args } = message;
  try {
    const value = await exports[fn](...args);
    process.send({ type: "resolve", value });
  } catch (err) {
    process.send({ type: "reject", reason: err });
  }
});
