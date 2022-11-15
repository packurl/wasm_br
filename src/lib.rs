use brotli::{BrotliCompress, BrotliDecompress};
// use brotli::enc::backward_references::BrotliEncoderMode::BROTLI_MODE_TEXT;
use wasm_bindgen::prelude::*;
use brotli::enc::BrotliEncoderParams;

#[wasm_bindgen]
pub fn unbr(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    BrotliDecompress(&mut &*data, &mut out).unwrap();
    out
}

#[wasm_bindgen]
pub fn br(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    let mut params= BrotliEncoderParams::default();
    // params.mode = BROTLI_MODE_TEXT;
    params.large_window = true;
    params.size_hint = data.len();
    BrotliCompress(&mut &*data, &mut out, &params).unwrap();
    out
}
