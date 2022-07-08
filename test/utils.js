const __dirname = new URL('.', import.meta.url).pathname.slice(1, -1);

/**
 * Return the blob of a given filename.
 * @param {string} filename
 * @returns {Blob}
 */
async function getBlob(filename) {
    const file = await Deno.readFile(`${__dirname}/${filename}`);
    const result = new Blob([file.buffer], {
        type: 'image/gif',
    });
    return result;
}

/**
 * Compare two blobs by their (text) content.
 * @param {Blob} first
 * @param {Blob} second
 * @returns {boolean}
 */
async function blobEquals(first, second) {
    return await first.text() === await second.text();
}

export { blobEquals, getBlob };
