/* tslint:disable */
/* eslint-disable */
declare module 'brotli_dec_worker' {
  /**
   * Decompresses an array of bytes compressed with Brotli.
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function unbr(bytes: Uint8Array): Promise<Uint8Array>;
  export default unbr;
}