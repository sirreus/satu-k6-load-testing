// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group("page_2 - https://satu.pro/category/pft", function () {
    response = http.get("https://satu.pro/category/pft", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
        "Cache-Control": "max-age=0",
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        "sec-ch-ua-mobile": "?0",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "https://github.com/sirreus/satu-k6-load-testing/issues/4",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/7fa8d79ff1bb61a4cbcc.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Pragma: "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "satu.pro",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Mode": "no-cors",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "script",
        Referer: "https://satu.pro/category/pft",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/c0344ecb6fe60ef82b74.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Pragma: "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "satu.pro",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Mode": "no-cors",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "script",
        Referer: "https://satu.pro/category/pft",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/82a900a720739b919af0.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Pragma: "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "satu.pro",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Mode": "no-cors",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "script",
        Referer: "https://satu.pro/category/pft",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/5d477ec721db7f0c460e.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Pragma: "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "satu.pro",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Mode": "no-cors",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "script",
        Referer: "https://satu.pro/category/pft",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/dd56beb78bf3d6640465.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Pragma: "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "satu.pro",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Mode": "no-cors",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "script",
        Referer: "https://satu.pro/category/pft",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/a36b0b3cd79bca578246.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Pragma: "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "satu.pro",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Mode": "no-cors",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "script",
        Referer: "https://satu.pro/category/pft",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/3be1cc54878ae47af670.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Pragma: "no-cache",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "satu.pro",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Mode": "no-cors",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "script",
        Referer: "https://satu.pro/category/pft",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
      },
    });
    response = http.get("https://satu.pro/img/catalog-menu.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        "If-None-Match": 'W/"42816-17b63cf1283"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "image",
        Referer: "https://satu.pro/category/pft",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
      },
    });
    response = http.get(
      "https://satu.pro/media/215601/ca985d447e6bd874ba/2ea85a47c8bf28f1c53197.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/8fd31d27a14f2eadba/e1eebd001c29e62aa43034.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/62cd205f64945fcbca/f257a5a75fb162cd027e43.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/a5e0ca1bbafd87a9ca/2538f8b4c2d7d76ff0a57c.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/5e93521df23b8b34ca/30473ed0a82d3884ea8899.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/f57a20dcdd35ee5aca/7796c3214b075f0606dd6c.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/bdb9204e4ba4212bca/c54c76d8dca49ca1c8c518.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/e8ded711ab7e44c4ca/048a531cd78c8f0ff01995.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/a2426d659402ed56ca/28c03abd96be5d9467df17.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/72893524a41fa1e4ca/363b1621dd9d5216c860d5.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/896fc3e1b39076c3ca/810b6746274ab0df02033e.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/19ca737fe9b8116fca/ae4087d80f9f40dbdbe239.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Pragma: "no-cache",
          "Sec-Fetch-Site": "same-origin",
          "Accept-Encoding": "gzip, deflate, br",
          Host: "satu.pro",
          "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          "Sec-Fetch-Mode": "no-cors",
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "image",
          Referer: "https://satu.pro/category/pft",
          Cookie:
            "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
          Connection: "keep-alive",
        },
      }
    );
    response = http.get("https://satu.pro/_nuxt/fonts/a192a7a.woff2", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        "Sec-Fetch-Mode": "cors",
        Origin: "https://satu.pro",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "Sec-Fetch-Dest": "font",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
        Pragma: "no-cache",
        Host: "satu.pro",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        Referer: "https://satu.pro/category/pft",
        "Sec-Fetch-Site": "same-origin",
      },
    });
    response = http.get("https://satu.pro/_nuxt/fonts/6ede726.woff2", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        "Sec-Fetch-Mode": "cors",
        Origin: "https://satu.pro",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "Sec-Fetch-Dest": "font",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        Connection: "keep-alive",
        Pragma: "no-cache",
        Host: "satu.pro",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        Referer: "https://satu.pro/category/pft",
        "Sec-Fetch-Site": "same-origin",
      },
    });
    response = http.get("https://satu.pro/api/front/cart/get_goods", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Accept: "application/json, text/plain, */*",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://satu.pro/category/pft",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
      },
    });
    response = http.get("https://satu.pro/favicon.ico", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "image",
        Referer: "https://satu.pro/category/pft",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
