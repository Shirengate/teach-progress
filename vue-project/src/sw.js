import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { setCatchHandler } from "workbox-routing";
registerRoute(
  ({ url }) => url.origin === "https://e72b706bba1ca1f0.mokky.dev",
  new NetworkFirst({
    cacheName: "api",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
registerRoute(
  ({ request }) => request.destination === "document",
  new CacheFirst({
    cacheName: "documents",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

setCatchHandler(async ({ event }) => {
  if (event.request.destination === "document") {
    return matchPrecache("/index.html");
  }

  return Response.error();
});
