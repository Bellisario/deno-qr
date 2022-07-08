import { qrcode } from 'https://deno.land/x/qrcode@v2.0.0/mod.ts';

function dataURLtoBlob(dataUrl) {
    // Decode the dataURL
    const binary = atob(dataUrl.split(',')[1]);

    // Create 8-bit unsigned array
    const array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }

    // Return our Blob object
    return new Blob([new Uint8Array(array)], {
        type: 'image/gif',
    });
}

export async function router(req) {
    // get request URL
    const url = new URL(req.url);

    // get path (that's also the requested QR)
    const requested = decodeURIComponent(url.pathname.slice(1));

    // optional URLs log
    // console.log(requested)

    // Base64 QrCode (data URL of type image/gif)
    const base64Image = await qrcode(requested);

    // get blob from data URL QR
    const blob = dataURLtoBlob(base64Image);

    // send back the QR as a blob stream
    return new Response(blob.stream(), {
        headers: {
            'Content-Type': 'image/gif',
        },
    });
}
