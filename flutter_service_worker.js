'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e1d7b98f0cbf50d0be38442471265c20",
"index.html": "4293c1baa55f46856d033f5ca09ba6f2",
"/": "4293c1baa55f46856d033f5ca09ba6f2",
"main.dart.js": "b72730197c6500c8adcbe0469cbe318f",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3aca961ee4023b81b24cf49ad28f5cbc",
".git/ORIG_HEAD": "e707255947a0d1daea6d6a38089dcb2a",
".git/config": "856df0dd8bd8a47d3c8ee488ce674a86",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0c/adace7c95310eea692ccb98564f3be9574c518": "c45a50457b34ee94c458f6b29e7d07ca",
".git/objects/9b/66db977cd8c5847c89a5471a6f73477c09c282": "9b7c8e1e05f3bd48b312210b1c6220d5",
".git/objects/04/751efa58d0178c2ff5da1e57ac9528ab230e0a": "23cd9115825973fbf8c0d9d25c738321",
".git/objects/56/4eb78e53019b72d8f3fc9a056f2f9e8b2283b0": "7cee2a0934ebe24925daca7ad89f4c60",
".git/objects/3d/f51d822702894fb5f916fb918157ca90c3d20a": "0d6739a3dae8d290c19e46d779e62925",
".git/objects/34/66b3b1b18b8cd92327e6ae48a6843ef0d78ac0": "cb4624b020b90fd46a18c2a03b207799",
".git/objects/9d/ecf989843b25d3af0402638a03d6710d927f7a": "8d28780d0bc3d11d8e51110fedfdb90e",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a2/385611c76e5eb24f0bfabdfd66bb85c815239e": "e50420ed9c2bc99f9e5dea21414db50e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/9c9cee311d6b76552a9190dfe2df555716825a": "9624aa04788bfa0cd42e7a935a723583",
".git/objects/ae/0fc3f2591c29357b726cebf21cf07c4019e678": "01b7f9d5ffae32b29d903effea5004d2",
".git/objects/d8/b46f9b7fbe47fed5d469e86519cba5efff8a1e": "331273d83fbed5ea8c62a31a1e0df733",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/3ce81c8bfb9fe1b9185de55189638807f89b30": "7608c9e530767f88812bcb930bea4dd8",
".git/objects/e3/b60b7036d54988184d42107e5e51601cf6fa75": "66184ae4020003e5615c4a65e8f5d004",
".git/objects/cf/f37437eb660f907d40fcbe2d15f98430449196": "7c1d6f3ebd8ab35528f634b3101d9cd7",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4b/eb25ef69f2526584b4cd61d6bc4b4d99fc8052": "d0a43c073836ded3e8abf309587ed3f8",
".git/objects/42/365b880bac83020c261d0900f4e25a195d06ab": "fb0df7814ae9d679042147ac506247c8",
".git/objects/89/2488300d89a1061f1d08e31f4d764cab664e8a": "433e0590a03c1565d3567d5f9efb461e",
".git/objects/89/2d84486c13e81373e9eab4be466ece989adfef": "cc5eec8002689d6fd571758125fee412",
".git/objects/73/943e19bfd1efb7aa857918dddecb1cc3f1b5d9": "8ff03862a67da0364eecbd44d2a2d09a",
".git/objects/1a/ad52d696aa41782eeef5075d137b60042fe539": "c648b752a67d0456d847fd782c07be32",
".git/objects/8f/56196eea6af588475e9dd0f3512a05d10641c2": "6ed5db9cc7d517c7fad73a5b3babc920",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/60bd40b693f0039b39a7951e50733ca623a4d0": "fe7f84ef8413539cb13b0a25a9c82a60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/5f3c15c58fe3470ac795e0fb9fb90a7de61b49": "9aa712f778178b0373fee31144abaa87",
".git/objects/96/28652026a7e54e3f8d6b12b9f25301059372f1": "c1ecde8188a8aa9be1b9b740403fb665",
".git/objects/3f/8d78a72afe00a5bb95e4067acd93770347bde7": "2aba84f3e431b7715d9f3e5a4eb8e263",
".git/objects/08/e61d97e6b3d711c7d47bef3589fc4918ff8365": "07456dc7f060689215238075a17a29e9",
".git/objects/06/64c6356763dc9fc0579fbaa4391ada6d93afdf": "b8501e969c5d4f6f25477057b4635bbb",
".git/objects/55/ac51a4a7fcc03376890f619e96f9d182b87e6c": "7f80b3b3ea6af7fabe6bae34ce30f076",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/dc/3ce2ab0791391a79fae93e7bd4335f069d2a82": "b4705a5220921274d680ae5cc130291c",
".git/objects/aa/35936bd650f66594662d43041c7051b67f7202": "5e9c7e18c002b69478aefebb8bd703c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/5cfb491fbbbb1a14a4381eb5c4305f4830b48e": "4be214de5b9edc496e779313ee4b3f07",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c2/e498517856aeacb0f6b105eaf5068f37e54823": "7df445ff410d286779f70ad750e36453",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/87cdf47403d86cc7bae5851098d5a69c9d171a": "9f3eed3b3d93acbf7c2e7d38af5e6c1a",
".git/objects/46/aedf1fba76b99352e5e3b5985c6abc7254458b": "710e7d5820c8442bb1ff467e8f09c8b2",
".git/objects/46/148921291d81f1d7738fc0cbfb93c615990df6": "c40f7d63e8eafb913a9a07c997b4121e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/9696aee22c3cbd776ecaf74d4e34041be22906": "dcfe33c363bf20b010e515002d7905dc",
".git/objects/83/6ea3bc747e1b26942f703cdd419f0688341743": "915a4183a7bb6f4ec181374ddd16247b",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/12/457c882c16b16e895d2a68f7bd9b095d58e9c6": "ae70be5258d8fc0c939357ce37ea0181",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/200e88bf78ff6e4c14ea186bf5b039cacf0090": "bce1c6f5c1248055f405467e24bef8f1",
".git/objects/82/fa9ff4228113f2c5ae96d0d48325192ce9e0ee": "e1b053b57a2dcd1edb138a7104d2433a",
".git/objects/47/acc3ed59624218af6475933d0b21e4e85467f6": "216b7f0235ccb420950750c99e4593ec",
".git/objects/14/1f0ad94d23608df8a5efe61c336e54c9c870d3": "f23f7bc42dce5cc5e1add69ab1516202",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79fd0320a435052f25163ab5efe5c461",
".git/logs/refs/heads/development": "b6f0d9471d31e048cf22deea0603af4d",
".git/logs/refs/heads/master": "5d7c4b4a9ea408c35ff4605dda899e71",
".git/logs/refs/remotes/origin/development": "2bf3eec9696586467e4488c3bba2eac7",
".git/logs/refs/remotes/origin/master": "f777b16010b54d8f2774ff6cef6ff05d",
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
".git/refs/heads/development": "2c685250c1175257e8f0a171047c3240",
".git/refs/heads/master": "2c685250c1175257e8f0a171047c3240",
".git/refs/remotes/origin/development": "2c685250c1175257e8f0a171047c3240",
".git/refs/remotes/origin/master": "e707255947a0d1daea6d6a38089dcb2a",
".git/index": "b800c89c610dd131617b71eadb2e8146",
".git/COMMIT_EDITMSG": "4d054c426f0382386b8499a97c16bd80",
".git/FETCH_HEAD": "e7e8b4c41ee1c4b51a6f21ae30c7e298",
"assets/AssetManifest.json": "ee45f1bcfb32e8319e5b907d25a24b30",
"assets/NOTICES": "377a7daadef9b64fa8e0170230d061b5",
"assets/FontManifest.json": "073ea84265509e5b2dd0b0cc25ed033f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/usage_history.png": "a9ed016a706e83c0f8eae954ee4cebdb",
"assets/assets/icons/2.0x/usage_history.png": "5d66d4fd83e594953fbeb8619f640809",
"assets/assets/icons/2.0x/meter.png": "202309719e08d2d68f934816e69ba483",
"assets/assets/icons/2.0x/date.png": "b7120c16ac9cbda456d0c0a4adde4947",
"assets/assets/icons/2.0x/logo.png": "bac6932c3330bbe90194c68a3055751e",
"assets/assets/icons/3.0x/usage_history.png": "8015dfd896fac82bae63a6224d6f811c",
"assets/assets/icons/3.0x/meter.png": "ea0010e9e07c81bb0b85d1c3c25265e3",
"assets/assets/icons/3.0x/date.png": "df946ab2554c4e88e81eb9949d291402",
"assets/assets/icons/3.0x/logo.png": "5b43dfb7c521313a798a9190ecc17588",
"assets/assets/icons/meter.png": "8d141739ae5652bf8aaca5012cf1837e",
"assets/assets/icons/date.png": "2f08ca7e3a83cddf0d3711ea7951bc35",
"assets/assets/icons/logo.png": "8832dcf4a633e9467beeb44e738a26c4",
"assets/assets/fonts/Proxima%2520Nova-Light.otf": "e2602b2f2c615d20c880911364b32191",
"assets/assets/fonts/Proxima%2520Nova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/Proxima%2520Nova-Regular.otf": "b48e664ac2614714ee34d78acc0adf9e",
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
