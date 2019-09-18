/* eslint-disable */
importScripts('/workbox/workbox-sw.js');
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html'
  },
  {
    url: '/favicon.png'
  },
  {
    url: '/fonts/93dee51e8ee9ead3cff068804d601c65.woff2'
  },
  {
    url: '/fonts/ba61d57de262a1532d12a5373fef5bed.woff'
  },
  {
    url: '/images/e60f0166ccaa987aeb2f6a355e6ec824.png'
  },
  {
    url: '/images/e981af58b9f77baa3d57c18d8ee211ca.svg'
  },
  {
    url: '/main.js'
  }
]);

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'));