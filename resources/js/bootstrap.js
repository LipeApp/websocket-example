window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster:       'pusher',
    key:               window.PUSHER_APP_KEY,
    wsHost:            '159.69.107.234',
    wsPort:            window.APP_DEBUG ? 6001 : 6002,
    wssPort:           window.APP_DEBUG ? 6001 : 6002,
    forceTLS:          !window.APP_DEBUG,
    disableStats:      true,
    enabledTransports: ['ws', 'wss'],
});
