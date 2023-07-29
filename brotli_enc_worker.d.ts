/* tslint:disable */
/* eslint-disable */
declare module 'brotli_enc_worker' {
  export type CompressionLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

  /**
   * Compresses an array of bytes with Brotli.
   * @param {Uint8Array} bytes
   * @param {0|1|2|3|4|5|6|7|8|9|10|11} [level=11]
   * @return {Promise<Uint8Array>}
   */
  export function br(bytes: Uint8Array, level: CompressionLevel): Promise<Uint8Array>;
  export default br;
}