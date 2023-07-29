importScripts('./brotli_for_importScripts.js');
(async()=>{
  const {br,unbr}=await fns;
  onmessage=async msg=>{
    postMessage(msg.data.level===undefined?unbr(msg.data):br(msg.data.bytes,msg.data.level));
  }
  postMessage('ready');
})();