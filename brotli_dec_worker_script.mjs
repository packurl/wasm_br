import {unbr} from "./brotli_dec.mjs";
onmessage=async({data})=>postMessage(unbr(data));
postMessage('ready');
