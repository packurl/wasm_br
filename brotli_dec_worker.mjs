const url=new URL('brotli_dec.wasm',import.meta.url);
await (await fetch(url)).arrayBuffer();
const worker=await new Promise(r=>{
  // For browsers that don't support type: module on workers (firefox < 114, safari < 15)
  // const worker=new Worker(new URL('./brotli_dec_worker_script.js',import.meta.url));
  const worker=new Worker(new URL('./brotli_dec_worker_script.mjs',import.meta.url),{type:'module'});
  worker.onmessage=msg=>{
    if(msg.data==='ready'){
      worker.onmessage=null;
      r(worker);
    }
  };
});
/**
 * Decompresses an array of bytes compressed with Brotli.
 * @param {Uint8Array} bytes
 * @return {Promise<Uint8Array>}
 */
const unbr=(bytes)=>new Promise(r=>{
  worker.onmessage=msg=>{
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage(bytes);
});

export {unbr};
export default unbr;
