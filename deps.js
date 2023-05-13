import { serve } from 'https://deno.land/std@0.187.0/http/server.ts';
import { qrcode } from 'https://deno.land/x/qrcode@v2.0.0/mod.ts';

import { assertEquals } from 'https://deno.land/std@0.187.0/testing/asserts.ts';

export { assertEquals, qrcode, serve };
