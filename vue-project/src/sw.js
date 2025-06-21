import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

import { CacheableResponsePlugin } from "workbox-cacheable-response";

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
