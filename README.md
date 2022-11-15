[WASM](https://developer.mozilla.org/en-US/docs/WebAssembly) libs for [brotli](https://developer.mozilla.org/en-US/docs/Glossary/brotli_compression) compression and decompression.

This is a simple wrapper on top of the [brotli](https://github.com/dropbox/rust-brotli) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/brotli).

<br>

Compilation:

`wasm-pack build --target web`

<br>

Dependencies:
- [brotli](https://github.com/dropbox/rust-brotli) ([BSD3 License](https://github.com/dropbox/rust-brotli/blob/master/LICENSE))
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) ([MIT License](https://github.com/rustwasm/wasm-bindgen/blob/main/LICENSE-MIT))
