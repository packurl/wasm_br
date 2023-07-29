/* tslint:disable */
/* eslint-disable */
declare module 'brotli_enc' {
  /**
   * Decompresses an array of bytes compressed with Brotli.
   * @param {Uint8Array} bytes
   * @return {Uint8Array}
   */
  export function unbr(bytes: Uint8Array): Uint8Array;
  export default unbr;
}