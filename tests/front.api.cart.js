import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";

const BASE_URL = "https://satu.pro/api/front";

export let errorRate = new Rate("errors");

export default function () {
  const endpoint = "/cart/get_goods";

  let res = http.get(`${BASE_URL}${endpoint}`);
  const result = check(res, {
    "is status 200": (r) => r.status === 200,
  });

  errorRate.add(!result);

  sleep(1);
}
