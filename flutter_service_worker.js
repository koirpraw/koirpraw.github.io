'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2fe68e9426f2b63f35203ce5d5fd8059",
"index.html": "58e3d6336adcf906ccca60db297f36c4",
"/": "58e3d6336adcf906ccca60db297f36c4",
"main.dart.js": "ddf6d97028db9d35600b2a5da225b5c3",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d93465458623fad485632b89ce053bbc",
".git/ORIG_HEAD": "64b6ae7c6247a9f911a52b10a38d19ba",
".git/config": "f13851cc659985f55a6723e75b59cf12",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/3343118b6424ffbc26d71e7b11397efb271273": "8c0f13c11533555164e24a697a52ad54",
".git/objects/66/5920feef6f0fa02c8ad2adb5d56c9c9ab27d2a": "2cad9542d37c1ca90abda643801c4828",
".git/objects/68/22b8fe494fa8dc614e1bfa16eb32443bb639c9": "e7e23f344972203baf66a5b7ab1667d9",
".git/objects/57/7711f0cbaa23ef8d33d69dce602fab7c665c1f": "d7fa822f659e515c1b5c75fe917197cd",
".git/objects/3b/656d85b978ba91147e7d3aa428963134b82189": "3fad35a99fcadb6e2be747a137aba754",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/93/a4ec968ef23537c89c66290ae6036dcc98c6fa": "59921bb1bb939863e136332e14c8441b",
".git/objects/94/2d7a0cd36fb0d6e184b6f19ad1b7e4f4d72331": "e7003428812a543b8e67ffc93483c210",
".git/objects/60/60adc6fd9adcc5e241b78e35e3cfb3612072e5": "c3435668ad881545e8fb3b1ec8348644",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a3/519b3b4a287a44d4c03780377b28f26adf3b20": "88c1cd762c6730c12607ea326bc64c27",
".git/objects/b5/821740160d5ac804f4d2e8dbdaead331696b10": "80fba0cecde34622216a707b9189247c",
".git/objects/a2/2c933dbd24b840c9d78e5a1accb1300ae054d1": "3276b13be4f8975904d72926e4739706",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4d63b92eb021556ac708be4bc71867aa16302e": "5558cc71ddf12769153452d7d1026bea",
".git/objects/c7/441eae7bbefdb5250bd5a89d8f378ad276368c": "8dbad6d8c58f216603d8b51047abe7d7",
".git/objects/c0/9154835a398a84fa6a25e657e8f9bb8b994462": "8cf16dd89f8c7ef03f9809510ad191d5",
".git/objects/ee/ecd5c07537a4712153c6897f3b15e2b341dfd0": "4a3a3bb147449cef48aacce6842ee0fc",
".git/objects/f2/93b3ddebab2d27afcade59252ada48935ca3bb": "4dd470fbc39a95fe30050b445a1e0e20",
".git/objects/f5/465bd167145d76e21573ad16af9d90dfb04185": "159e071fd6818c364f707ad28f79a4b3",
".git/objects/c1/d908a0d3ffdce0e40152f67f7dec09ee6d0b45": "47f50d4dde099850df1901fd332d4d3a",
".git/objects/c1/8d12bd36eaa8f75117c0bcb4562e8d979690cd": "f6b47690b46d7d43f6839fb99d9afbb6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/37c5ec06f5720f94ea5d747d4d82b4e697b4ad": "9aa0553870a76139a64c2c82060d760b",
".git/objects/28/3ddda3d4c4541f4837c924720dad729fa5dcd4": "7e0af1a44c244152530ad7254905db51",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/cdce73b36c0749a493f02232fea90387df2cfd": "682f4a71026e22ccf8d70d20fc3a0077",
".git/objects/81/82f43eb36a8150b928075d5fc3bb51be9f0d96": "2002ffb0aba28b3d0bdc9f9609a7ea05",
".git/objects/44/8c14e5925ba4ff80241f85557a9808fdbad103": "565cd3a2d40a2b3ed944ab845007c7e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/1e0b0249d6a56c169e4a792143962920d2c254": "7fe50a3a0bc86f9ede37ab35103d7ccf",
".git/objects/09/ea573bd6069762fad2a49e141b3eb6a2c1d3bd": "608060a7735795c316499b34cfaec742",
".git/objects/62/b6f5ec18b911d4e3d2d90ad2b7612b43795e97": "088db8a0c370f2cb70cce9e94705b746",
".git/objects/96/8664e8bb2f8fb54952119e82e21851480b6fcd": "e5f6f31489393ab63ddf7d60b502ca04",
".git/objects/96/b2b42bcfbf9f457874f0faac45d6a4415eba70": "924d628d08d98ca5e991d2ae3abccf29",
".git/objects/54/b22c513ac13c2d8c69348bcc5ab46d723471d4": "5d7500184e7f8f3db2ed7cb7d190d05c",
".git/objects/01/d1f8185b8b59362116d377d7215d6b49e8a11a": "41bfdf0a433a8804493a5ba4c1fcc657",
".git/objects/01/0460ce4ee71b32385f9292c724d73ae65e1546": "ead26da2f242e15e28f71cd090f14eb1",
".git/objects/06/ded05f12aec73f2d65aab81ec8c01b6cc95c05": "962b421a255779207a243c4ce78d13e4",
".git/objects/d4/db7a2b9012011f06137d1276b6a8748c58334a": "664ae2d79fe368e57c73119b01b98508",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/6962d2b973c83a539ad9d8207a2f0278b2a81a": "52279ba059011fe9a1d241326d5c05d3",
".git/objects/ea/b0b155e4b0b2ca22d6c90a4230c2f4116aa582": "47312fa114ba6a3e6a62ed9536001b56",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/fa/7524468d71dded371f3524530549cbd1a69d4b": "12ccb58223dd95d63ca7e4391ad5a665",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/696716e08c0eb6508207c3cebbde2e79cf4146": "4ac51cd53433e35673a853ee79aa8fbd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8c/79282b051d40fe6168a087d9bef5b1ff385810": "d94d2bb0ced746d52ab827d38385d758",
".git/objects/1d/7ba3764466f92afd59840b6f33358957a8ecc6": "63893cc2b29e710bb7cebc75cef2c7eb",
".git/objects/71/645bcd8395e688cf2a2a6f82988bcb6c4f8380": "a22c174f1da24a3ff276a7b6566fa246",
".git/objects/76/868215cc1581ced5621883a5451b2cd15a61bc": "4cf5985f6269f521497d8abdd036da19",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/4806a043939e840328c4e147375521d5f27f8f": "a46f3fdc6fdcdf005384d27798f751ba",
".git/objects/78/2deb14179d47f3a5debc23557a0f2d13ae3f57": "52d0d0ea8e30aca068a0a4169c589881",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/objects/7a/cc0a0d85b2f02e06063b2e5ed4060219dc5b69": "603a154210f2fcbc7d16b12ab61c8ca4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78aaf8daaad421d7ba61058c8b729c17",
".git/logs/refs/heads/master": "11379361865afeabf3f925c2d45d696b",
".git/logs/refs/remotes/origin/master": "e1c725dec15e00e1a643d86263056350",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "613d234570a407f036bf162ffe8f3d99",
".git/refs/remotes/origin/master": "613d234570a407f036bf162ffe8f3d99",
".git/index": "6682f1563bcb80ff994a4af00bd9c3fe",
".git/COMMIT_EDITMSG": "a9e79661db128b27cb647eeb192cce54",
".git/FETCH_HEAD": "80861b812009839a3cd55bd9242199b9",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "8d071c4a431bbc3aa224a03c6a250c80",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
