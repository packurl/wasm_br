importScripts('./brotli_dec_for_importScripts.js');
(async()=>{
  const fn=await unbr;
  onmessage=async msg=>postMessage(fn(msg.data));
  postMessage('ready');
})();