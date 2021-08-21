import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = "https://api-v2.satu.pro/api/front";

export default function () {
  const endpoint = "/products/shtukaturnaya-stanciya-pft-g4-smart-bez-v-n-380v";

  const req = {
    method: "GET",
    url: `${BASE_URL}${endpoint}`,
  };

  let res = http.batch([req]);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });

  sleep(1);
}
