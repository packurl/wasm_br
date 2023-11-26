use brotli::BrotliDecompress;
// use brotli::BrotliCompress;
// use brotli::enc::BrotliEncoderParams;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn unbr(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    BrotliDecompress(&mut &*data, &mut out).unwrap();
    out
}

// #[wasm_bindgen]
// pub fn br(data: &[u8], quality: i32) -> Vec<u8> {
//     let mut out = Vec::with_capacity(data.len() + 64);
//     let mut params= BrotliEncoderParams::default();
//     params.quality = quality;
//     // Setting the mode to text doesn't seem to be necessary as it's detected correctly
//     // and since it produces larger files on non text files, it's better not to set it.
//     // params.mode = brotli::enc::backward_references::BrotliEncoderMode::BROTLI_MODE_TEXT;
//     // large_window option seem to render compressed file incompatible with curl and browsers
//     // content decoding.
//     // params.large_window = true;
//     params.size_hint = data.len();
//     if quality < 8 {
//         params.favor_cpu_efficiency = true;
//     }
//     BrotliCompress(&mut &*data, &mut out, &params).unwrap();
//     out
// }