import fetch from 'isomorphic-fetch';

// let url_base = "https://www.quora.com/api/logged_in_user";

export const serializeGet = (obj, prefix) => {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];

      str.push(typeof v === "object" ?
        serializeGet(v, k) :
      encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
};

// Internal Helper
export const sendAPIRequest = (method = "GET") => {
  return {
    method: method,
    headers: {
      client: "{\"platform\": \"Web\"}",
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    dataType: "json"
  };
};


export const GetAPI = (URL) => {
  return fetch(URL, sendAPIRequest()).then(
    res => {
      if (res.status === 401) {
        location.reload();
      } else if (res.status >= 400) {
        return res.json();
      } else {
        return res.json();
      }
    },
    err => {
      throw Error(err);
    }
  );
};


