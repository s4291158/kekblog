import fetch from 'isomorphic-fetch';
import {LogAPICallEvent, LogAPIResultEvent} from "./GoogleAnalytics";

let url_base;

export const TESTING_URL = "https://api.github.com/repos/vmg/redcarpet/issues?state=closed";

export const APIUrlBase = url_base;

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
export const sendAPIRequest = (method = "POST", data = null, token = null) => {
  var RequestData = {
    method: method,
    headers: {
      client: "{\"platform\": \"Web\"}",
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    dataType: "json"
  };

  if (token !== null) {
    RequestData.headers.Authorization = "JWT " + token;
  }

  if (data !== null && method.toLowerCase() !== "get" && method.toLowerCase() !== "head") {
    RequestData.body = JSON.stringify(data);
  }

  return RequestData;
};

export const PostAPI = (URL, data, token = null) => {
  LogAPICallEvent("Post", URL);
  return fetch(url_base + URL, sendAPIRequest("POST", data, token))
    .then(
      res => {
        LogAPIResultEvent("Post", URL, res.status);
        if (res.status === 401) {
          location.reload();
        } else if (res.status >= 400) {
          return res.json();
        } else {
          return res.json();
        }
      },
      err => {
        throw Error("(POST) API Returned Malformed JSON"); //";
      }
    );
};

export const PatchAPI = (URL, data = null, token = null) => {
  LogAPICallEvent("Patch", URL);
  return fetch(url_base + URL, sendAPIRequest("PATCH", data, token)).then(
    res => {
      LogAPIResultEvent("Patch", URL, res.status);
      if (res.status === 401) {
        location.reload();
      } else if (res.status >= 400) {
        return res.json();
      } else {
        return res.json();
      }
    },
    err => {
      throw Error("(PATCH) API Returned Malformed JSON");
    }
  );
};

export const PutAPI = (URL, data, token = null) => {
  LogAPICallEvent("Put", URL);
  return fetch(url_base + URL, sendAPIRequest("PUT", data, token)).then(
    res => {
      LogAPIResultEvent("Put", URL, res.status);
      if (res.status === 401) {
        location.reload();
      } else if (res.status >= 400) {
        return res.json();
      } else {
        return res.json();
      }
    },
    err => {
      throw Error("(PUT) API Returned Malformed JSON");
    }
  );
};

export const GetPureAPI = (URL, token = null) => {
  LogAPICallEvent("Get", URL);
  return fetch(url_base + URL, sendAPIRequest("GET", null, token)).then(
    res => {
      LogAPIResultEvent("Get", URL, res.status);
      if (res.status === 401) {
        location.reload();
      } else if (res.status >= 400) {
        return res.json();
      } else {
        return res.json();
      }
    },
    err => {
      throw Error("API Returned Malformed JSON");
    }
  );
};

export const GetAPI = (URL, token = null, data = null) => {
  LogAPICallEvent("Get", URL);
  return fetch(url_base + URL + "?" + serializeGet(data), sendAPIRequest("GET", null, token)).then(
    res => {
      LogAPIResultEvent("Get", URL, res.status);
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

export const DeleteAPI = (URL, token = null, data = null) => {
  LogAPICallEvent("Delete", URL);
  return fetch(url_base + URL, sendAPIRequest("DELETE", data, token)).then(
    res => {
      LogAPIResultEvent("Delete", URL, res.status);
      if (res.status === 401) {
        location.reload();
      } else if (res.status >= 400) {
        return res.json();
      } else {
        return res.json();
      }
    },
    err => {
      throw Error("API Returned Malformed JSON");
    }
  );
};

