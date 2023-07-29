/* tslint:disable */
/* eslint-disable */
declare module 'brotli' {
  export type CompressionLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /**
   * Compresses an array of bytes with Brotli.
   * @param {Uint8Array} bytes
   * @param {0|1|2|3|4|5|6|7|8|9|10|11} [level=11]
   * @return {Uint8Array}
   */
  export function br(bytes: Uint8Array, level: CompressionLevel): Uint8Array;
  /**
   * Decompresses an array of bytes compressed with Brotli.
   * @param {Uint8Array} bytes
   * @return {Uint8Array}
   */
  export function unbr(bytes: Uint8Array): Uint8Array;
}