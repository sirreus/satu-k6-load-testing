import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = "https://api-v2.satu.pro/api/front";

export default function () {
  const endpoint = "/products/shtukaturnaya-stanciya-pft-g4-smart-bez-v-n-380v";

  let res = http.get(`${BASE_URL}${endpoint}`);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });

  sleep(1);
}
