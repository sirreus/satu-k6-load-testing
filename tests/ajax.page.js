import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = "https://www.kia.ru/ajax/page";

export default function () {
  const endpoint = "/used-cars/list?city=moscow";

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
