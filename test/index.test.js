import { assertEquals } from '../deps.js';
import { router } from '../router.js';
import { blobEquals, getBlob } from './utils.js';

Deno.test('Text QR: <blank> (homepage)', async () => {
    const request = new Request('https://example.com/');
    const response = await router(request);
    assertEquals(
        await blobEquals(await response.blob(), await getBlob('index.gif')),
        true,
    );
});

Deno.test('Text QR: "test"', async () => {
    const request = new Request('https://example.com/test');
    const response = await router(request);
    assertEquals(
        await blobEquals(await response.blob(), await getBlob('test.gif')),
        true,
    );
});

Deno.test('URL QR: google.com', async () => {
    const request = new Request('https://example.com/https://google.com');
    const response = await router(request);
    assertEquals(
        await blobEquals(
            await response.blob(),
            await getBlob('google.com.gif'),
        ),
        true,
    );
});
