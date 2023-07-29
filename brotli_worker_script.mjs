import {br,unbr} from "./brotli.mjs";
onmessage=async({data})=>postMessage(data.level===undefined?unbr(data):br(data.bytes,data.level));
postMessage('ready');
