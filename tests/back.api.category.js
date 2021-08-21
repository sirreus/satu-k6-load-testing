import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = "https://api-v2.satu.pro/api/front";

export default function () {
  const endpoint1 = "/category/shtukaturnye-stancii-b-u";
  const endpoint2 = "/category/shtukaturnye-stancii";

  const req1 = {
    method: "GET",
    url: `${BASE_URL}${endpoint1}`,
  };
  const req2 = {
    method: "GET",
    url: `${BASE_URL}${endpoint2}`,
  };

  let res = http.batch([req1, req2]);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });

  sleep(1);
}
