bring cloud;
bring util;
bring http;
bring expect;

let website = new cloud.Website(
  path: "./vite-client/dist",
);

let api = new cloud.Api({
  cors: true,
  corsOptions: {
    allowHeaders: ["*"],
    allowMethods: [http.HttpMethod.POST],
  },
});
website.addJson("config.json", { api: api.url });

let counter = new cloud.Counter() as "website-counter";

api.get("/", inflight (request) => {
  return {
    status: 200,
    headers: {
      "Content-Type" => "text/html",
      "Access-Control-Allow-Origin" => "*",
    },
    body: "<div id=\"hello\" class=\"mt-4\">Hello, Wing</div>",
  };
});

api.post("/hello-static", inflight (request) => {
  return {
    status: 200,
    headers: {
      "Content-Type" => "text/html",
      "Access-Control-Allow-Origin" => "*",
    },
    body: "<div id=\"hello\" class=\"mt-4\">Hello {counter.inc()}</div>",
  };
});

let invokeAndAssert = inflight(response: http.Response, expected: str) => {
  log("response: {response.status} ");
  expect.equal(response.status, 200);
  assert(response.body?.contains(expected) == true);
};

test "renders the index page" {
  invokeAndAssert(http.get(website.url), "Hello, Wing");
}

test "api returns the correct response" {
  invokeAndAssert(http.post("{api.url}/hello-static"), "Hello 0");
}

test "api handles cors" {
  let response = http.fetch("{api.url}/hello-static", {
    method: http.HttpMethod.OPTIONS,
    headers: {
      "Origin" => "https://example.com",
      "hx-target" => "hello",
    },
  });
  expect.equal(response.status, 204);
  log("headers: {Json.stringify(response.headers)}");
  expect.equal(response.headers.get("access-control-allow-headers"), "*");
  expect.equal(response.headers.get("access-control-allow-origin"), "*");
  expect.equal(response.headers.get("access-control-allow-methods"), "POST");
}
// bring cloud;
// bring http;


// let api = new cloud.Api();
// let website = new cloud.Website(path: "./client");
// website.addJson("config.json", {api: api.url});

// api.post("/greet/:name", inflight (req) => {
//   let name = req.vars.get("name");
//   let var message = "Hello, {name}!";
//   if let _ = req.query.tryGet("all-caps") {
//     message = message.uppercase();
//   }
//   return {
//     status: 200,
//     body: message,
//   };
// });

// test "POST /greet/:name" {
//   let res = http.post("{api.url}/greet/world", body: "Hello, world!");
//   assert(res.status == 200);
//   assert(res.body == "Hello, world!");
// }

// test "POST /greet/:name?all-caps" {
//   let res = http.post("{api.url}/greet/world?all-caps", body: "Hello, world!");
//   assert(res.status == 200);
//   assert(res.body == "HELLO, WORLD!");
// }
