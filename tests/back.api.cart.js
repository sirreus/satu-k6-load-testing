import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = "https://api-v2.satu.pro/api/front";

export let options = {
  stages: [
    { duration: "5m", target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: "10m", target: 100 }, // stay at 100 users for 10 minutes
    { duration: "5m", target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ["p(99)<1500"], // 99% of requests must complete below 1.5s
  },
};

export default function () {
  const endpoint = "/cart/get_goods";

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
