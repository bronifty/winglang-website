"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure3Client = 
          require("/home/bro/codes/dev/website/target/test/main.wsim/.wing/inflight.$Closure3-1.js")({
            $api_url: process.env["WING_TOKEN_WSIM_ROOT_ENV1_CLOUD_API_ATTRS_URL"],
            $http_Util: require("/home/bro/.local/share/fnm/node-versions/v20.11.1/installation/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};