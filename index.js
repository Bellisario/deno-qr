import { serve } from './deps.js';
import { router } from './router.js';

serve(router, {
    onListen({ port, _ }) {
        console.log(`Server listening on port ${port}`);
    },
});
