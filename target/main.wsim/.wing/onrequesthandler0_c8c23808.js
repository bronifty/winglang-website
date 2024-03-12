"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("/home/bro/.local/share/fnm/node-versions/v20.11.1/installation/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/api.onrequest.inflight.js")).ApiOnRequestHandlerClient({ handler: 
          (await (async () => {
            const $Closure1Client = 
          require("/home/bro/codes/dev/website/target/main.wsim/.wing/inflight.$Closure1-1.js")({
            $counter: (function() {
  let handle = process.env.COUNTER_HANDLE_0446b192;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_0446b192");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle);
})(),
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        , args: {} }));
  return await $handler.handle(event);
};