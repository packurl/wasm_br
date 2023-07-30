[WASM](https://developer.mozilla.org/en-US/docs/WebAssembly) libs for [brotli](https://developer.mozilla.org/en-US/docs/Glossary/brotli_compression) compression and decompression.

This is a simple wrapper on top of the [brotli](https://github.com/dropbox/rust-brotli) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/brotli).

<br>

Compilation:

`wasm-pack build --target web`

<br>

Dependencies:
- [brotli](https://github.com/dropbox/rust-brotli) ([BSD3 License](https://github.com/dropbox/rust-brotli/blob/master/LICENSE))
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) ([MIT License](https://github.com/rustwasm/wasm-bindgen/blob/main/LICENSE-MIT))

---

**Remarks:**
  
- Level 7 or 8 seem to be the best when compression times area important.
- Level 9 sometimes gives worse ratios that 7 or 8 (this is the case when compressing `brotli.wasm` or `brotli_enc.wasm` for instance)
- Level 10 canonical be slower than level 11 (again, that's the case on `brotli.wasm` or `brotli_enc.wasm`).
- Level 11 always gives better ratios, and sometimes by a lot.