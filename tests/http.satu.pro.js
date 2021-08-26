// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group("page_1 - https://satu.pro/", function () {
    response = http.get("https://satu.pro/", {
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
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/c0344ecb6fe60ef82b74.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/82a900a720739b919af0.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/5d477ec721db7f0c460e.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/ab0bfb011ef823385f03.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/3be1cc54878ae47af670.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/a36b0b3cd79bca578246.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/17318efb2df123287a13.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/6bd9d553f4f3c06602d2.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/js/79bf5a7d50f13c41acf7.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/img/catalog-menu.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"42816-17b63cf1283"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get(
      "https://satu.pro/media/215601/6587fd0d772805b1ba/9ac1a40fa23050802f9007.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/efcb5f361be2990bba/69fc6e129c277cdc76e766.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/a0ab43fdf8351430ba/30a6fef38ec225f2f72109.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/53864e2e77b5e52dca/cb33e1862267d4c6c9bfe7.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/325ee0c49e37f342ca/1ec4206f38ca95ce75f7fa.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/62cd205f64945fcbca/f257a5a75fb162cd027e43.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/a5e0ca1bbafd87a9ca/2538f8b4c2d7d76ff0a57c.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/72893524a41fa1e4ca/363b1621dd9d5216c860d5.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/ae1ff6d4faa8bb0bca/f3af0762362876cdd9fd1c.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get("https://satu.pro/img/repairs.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"6e7a-17b63cf1284"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/img/rent.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"1c1b9-17b63cf1284"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/img/parts.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"6b02-17b63cf1283"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get(
      "https://satu.pro/media/215601/9f5a0b3a45512762ca/acf1f0e0edfc3c1222ae27.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get("https://satu.pro/_nuxt/fonts/6ede726.woff2", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        Origin: "https://satu.pro",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get("https://satu.pro/_nuxt/fonts/a192a7a.woff2", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        Origin: "https://satu.pro",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get(
      "https://satu.pro/media/215601/62e7f5f887c3512bca/70e48ecf2ffd4a10f0d4f8.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/b588617ae37e5eaaca/b6041409f83eef46dc703f.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/7663ee68a725d1abca/5959283cbf5dfc7c87eeeb.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/ca985d447e6bd874ba/2ea85a47c8bf28f1c53197.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/215601/abc68d48d0d9e395ba/f43c13eb4938cb82370b9e.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get("https://satu.pro/img/brands/kaleta.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"33c1-17b63cf127c"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/img/brands/pft.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"230f-17b63cf127d"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/img/brands/maltech.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"4b89-17b63cf127c"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/img/brands/volma.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"adf-17b63cf127f"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/img/brands/kreisel.png", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"249b-17b63cf127c"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/img/brands/st.jpeg", {
      headers: {
        Host: "satu.pro",
        Connection: "keep-alive",
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
        Referer: "https://satu.pro/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        Cookie:
          "favToken=MWCznzaO9rOsoTvgCMd242kkFdO73_De; Session_id=s%3AMWCznzaO9rOsoTvgCMd242kkFdO73_De.dhENFH1VCF4AnYUgUOeLGfsXNwpwVFmUzI60RhtBBnU",
        "If-None-Match": 'W/"1d95-17b63cf127d"',
        "If-Modified-Since": "Fri, 20 Aug 2021 13:45:20 GMT",
      },
    });
    response = http.get("https://satu.pro/media/static/home/123.jpg", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    });
    response = http.get(
      "https://satu.pro/media/static/home/20130521-IMG_4492.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get(
      "https://satu.pro/media/static/home/20150709_2eb4de509e802ed297ea65714ab84c2f.jpg",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
          Referer: "https://satu.pro/",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }
    );
    response = http.get("https://satu.pro/_nuxt/js/c7594e61feb4e3bbaee9.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        Referer: "https://satu.pro/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
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
        Referer: "https://satu.pro/",
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
        Referer: "https://satu.pro/",
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
