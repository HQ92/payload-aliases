export const isLiveSite = () => {
  const hostname = window && window.location && window.location.hostname;

  let isLive = false;

  if (
    (process.env.NEXT_PUBLIC_MODE === "release" &&
      hostname === process.env.NEXT_PUBLIC_SERVER_URL) ||
    hostname === process.env.NEXT_PUBLIC_SERVER_URL?.replace("www.", "")
  )
    isLive = true;

  return isLive;
};

import * as _canUseDOM from "./canUseDOM";
export const canUseDOM = _canUseDOM;

import * as _cms from "./cms/index";
export const cms = _cms;
