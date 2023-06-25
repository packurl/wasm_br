const url=new URL('brotli.wasm',import.meta.url);
await (await fetch(url)).arrayBuffer();
const src=name=>`(async()=>{
  const mod=await WebAssembly.compileStreaming(await fetch('${url}',{cache:'force-cache'}));
  const wasm=(await WebAssembly.instantiate(mod)).exports;
  const malloc=wasm.__wbindgen_malloc;const free=wasm.__wbindgen_free;
  const pointer=wasm.__wbindgen_add_to_stack_pointer;
  const fn=it=>{
    const r=pointer(-16);
    const n1=it.length;
    const p1=malloc(n1,1);
    new Uint8Array(wasm.memory.buffer).set(it,p1);
    wasm.${name}(r,p1,n1);
    const arr=new Int32Array(wasm.memory.buffer);
    const p2=arr[r/4];const n2=arr[r/4+1];
    const res=new Uint8Array(wasm.memory.buffer).subarray(p2,p2+n2).slice();
    free(p2,n2);
    return res;
  };
  onmessage=async msg=>postMessage(fn(msg.data));
  postMessage('ready');
})();`
const fns=['unbr','br_best','br_fast'];
const workers=new Map(await Promise.all(fns.map(it=>new Promise(r=>{
  const worker=new Worker(URL.createObjectURL(new Blob([src(it)],{type:'application/javascript'})),{type:'module'});
  worker.onmessage=msg=>{
    if(msg.data==='ready'){
      worker.onmessage=null;
      r([it,worker]);
    }
  };
}))));
/**
 * Brotli-Compresses the supplied data with the best compression method.
 * @param {Uint8Array} data
 * @return {Promise<Uint8Array>}
 */
const brBest=(data)=>new Promise(r=>{
  const worker=workers.get('br_best');
  worker.onmessage=msg=>{
    if(typeof msg.data==='string'){
      console.log(msg.data);
    }
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage(data);
});

/**
 * Brotli-Compresses the supplied data with the fastest compression method.
 * @param {Uint8Array} data
 * @return {Promise<Uint8Array>}
 */
const brFast=(data)=>new Promise(r=>{
  const worker=workers.get('br_fast');
  worker.onmessage=msg=>{
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage(data);
});

/**
 * Brotli-Decompresses the supplied data.
 * @param {Uint8Array} data
 * @return {Promise<Uint8Array>}
 */
const unbr=(data)=>new Promise(r=>{
  const worker=workers.get('unbr');
  worker.onmessage=msg=>{
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage(data);
});

export {
  brFast,
  brBest,
  unbr
};
