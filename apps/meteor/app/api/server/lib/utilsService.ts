/* eslint-disable no-undef */

export const wordArrayToUint8Array = (wordArray: CryptoJS.lib.WordArray) => {
	const l = wordArray.sigBytes;
	const { words } = wordArray;
	const result = new Uint8Array(l);
	let i = 0;
	let j = 0;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		// here i is a multiple of 4
		if (i === l) break;
		const w = words[j++];
		result[i++] = (w & 0xff000000) >>> 24;
		if (i === l) break;
		result[i++] = (w & 0x00ff0000) >>> 16;
		if (i === l) break;
		result[i++] = (w & 0x0000ff00) >>> 8;
		if (i === l) break;
		result[i++] = w & 0x000000ff;
	}
	return result;
};

export const makeBufferChunks = (buffer: Buffer, chunkSize: number) => {
	const result: Buffer[] = [];
	let i = 0;
	while (i < buffer.length) result.push(buffer.slice(i, (i += chunkSize)));
	return result;
};

/**
 * Configuration options.
 */
export interface CipherOption {
	/**
	 * The IV to use for this operation.
	 */
	iv?: CryptoJS.lib.WordArray | undefined;
	format?: typeof CryptoJS.format.Hex | undefined;
	[key: string]: any;
}
