'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3fa3d2fb54ba6347fb29adff5d726bb1",
"assets/AssetManifest.bin.json": "fa630a252364a729569d79fe2d1368b8",
"assets/AssetManifest.json": "5a40144f6ce23cc2bc490a26dbe42e0d",
"assets/assets/images/alno1.jpg": "4591f30c6e68279d91f4a57cc1dd11e5",
"assets/assets/images/alno2.jpg": "348194615586142f3553a747bd8f3f87",
"assets/assets/images/alnozha.jpg": "1ba07872fc2d8e9e2458bc82afec88fd",
"assets/assets/images/alnozhamickey2.jpg": "1139a772f31fadab44be9d3b68b8bd78",
"assets/assets/images/alnozhamickey3.jpg": "5068c94fadc5f0df30f61dcd6f7e4057",
"assets/assets/images/altgmoogarden1.jpg": "82a890036163a522a1ddf5dcc0afc699",
"assets/assets/images/altgmoogarden2.jpg": "e7eb44bc55ec680a985f04364fa86c77",
"assets/assets/images/altgmoohotel.jpeg": "769fef917b026a64c9758728fc2bd31a",
"assets/assets/images/beonia.jpg": "957cfbe2fb7f33c0ad1db889aaab4cb4",
"assets/assets/images/blue1.jpg": "8251946f681e44008364517191b2cbf7",
"assets/assets/images/blue2.jpg": "0d349d4f4748d2e1f2b048df63145821",
"assets/assets/images/blue3.jpg": "0c09ce3e0b41ba116f70e64932e8f8b1",
"assets/assets/images/gard.jpg": "9fda2694f0872d0c0fbec3a1c3a5a756",
"assets/assets/images/grandcafe1.jpg": "3e43830a8a01a0f3e4bdcecd32a74cda",
"assets/assets/images/grandcafe3.jpg": "d0483a386e5704626fd346825f44f504",
"assets/assets/images/grandhotel.jpg": "c27d933e9cffbe8b0094925c36e70067",
"assets/assets/images/grandp.png": "6d9b87fd259c9a4ea1ee0db9b795dee3",
"assets/assets/images/grandroom1.jpg": "07ab8ad4c8298b5e69bffd8eba55257c",
"assets/assets/images/grandroom2.jpg": "725815d0bf5a3e04be9f48fb2ed0f7af",
"assets/assets/images/grandtibapool1.jpg": "78c282bc79ec1d22769fb4408c644db8",
"assets/assets/images/grandtibapool3.jpg": "b36536006365797160e345a41225b3e4",
"assets/assets/images/grandtibarosehotel.png": "4f73150c5eb9bca249926daa179d15c0",
"assets/assets/images/hotellogo.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/logo2025newww.png": "ada11358b281f4096d122a4f70f18145",
"assets/assets/images/lvndolapool2.jpg": "ddb65f97c0506b17245cbbefa57a342b",
"assets/assets/images/MARVEL_bowling.jpg": "7c1d9b7d8e9f67ec4946b0704a8d7cf9",
"assets/assets/images/MICKEY_PARK.jpg": "3725c5d7aa90fbd78ba681963bc44762",
"assets/assets/images/minizooo1.jpg": "ce232f6053f7ae25c050a071de8e18c6",
"assets/assets/images/minizooo2.jpg": "5f5300da3184acd7af13b4d99a9188dc",
"assets/assets/images/minizooo3.jpg": "0cd01256063dcc4efe345c8aef2f2e4f",
"assets/assets/images/minizooo4.jpg": "c8412ee6c8973e3216cb2dfe2016ecfe",
"assets/assets/images/mm.jpg": "5ed646580294625cfdbaff2885f81049",
"assets/assets/images/n.jpg": "7c7559afa3db2abcad9f0830f3cc8be1",
"assets/assets/images/newchalet11.jpg": "7c3885644842f1f68e0650915cac6ff8",
"assets/assets/images/newchalet5.jpg": "ad9e4f26cd9392e1302d48c976ea266d",
"assets/assets/images/plazapool2.jpg": "20942a531e9a2ef109632749c125ab5b",
"assets/assets/images/plazapool3.jpg": "58d2d2adbfe67fb03a9d02d4c5c51a2a",
"assets/assets/images/Pradise_Pool.jpg": "9171d2c28855b04eb9839a9c78213ce2",
"assets/assets/images/restaurantheader.jpg": "ea99ce318a0cb2d9dbb54bac5a1b1b2d",
"assets/assets/images/tagmokidsarea1.jpg": "752e51abfdbb110c7e82a05310b7e26a",
"assets/assets/images/tagmokidsarea2.jpg": "8e8e968c19660845f195c9fcc2df1950",
"assets/assets/images/tagmoo1.jpg": "d34eae2ee77b1f95ba4cfb64adc70897",
"assets/assets/images/tagmoo2.jpg": "d99c7858eb4126ff4ea88d340c211378",
"assets/assets/images/tagmoo3.jpg": "62ab1d37cac12027c867902b070d880f",
"assets/assets/images/tiba1.png": "1252cfc3215a0c69eff7185e261f92e7",
"assets/assets/images/tiba2.png": "1fc33cf2805da2dbc75aa2c87a5b7baf",
"assets/assets/images/tiba3.jpg": "cb93d9f815706e3f57ca127cd7941f1b",
"assets/assets/images/tiba4.png": "b56375cd189c80b68fddf39139b3376e",
"assets/assets/images/tiba5.png": "4ff55d72b577d1c2c57e425536ff7072",
"assets/assets/images/tiba6.jpg": "060fcca42edc905d54d8291d00cee66e",
"assets/assets/images/tiba7.jpg": "8f4488629320294292e555124ef038ad",
"assets/assets/images/tiba8.png": "cf74be11ff6041f6c2fdcc9ea4066697",
"assets/assets/images/tiba9.jpg": "348194615586142f3553a747bd8f3f87",
"assets/assets/images/tibap.png": "b9187d7e85e1c9d042191f2a820e1ab7",
"assets/assets/images/tibaroom1.jpg": "5eefde1d613ae98fbe584809f05d72a8",
"assets/assets/images/tibarosehotel%2520.png": "dc90573743b3603008186b7104a942fa",
"assets/assets/images/tibasweetlux1.jpg": "c7003653f22b0ddee7728376349c83e9",
"assets/FontManifest.json": "2b52acee7bee9f34d372a965ef37754f",
"assets/fonts/MaterialIcons-Regular.otf": "f923f3fb0c42ca80f7a086bd21fc2451",
"assets/NOTICES": "f102e4778b79210e25821743d437618b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "d68fb95f44d30f74e665feca3020afc2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e4e432affdf2e568368e61e0909d5427",
"/": "e4e432affdf2e568368e61e0909d5427",
"main.dart.js": "794153fb1dc4c085b441082173d57712",
"manifest.json": "3177ba84a2ba123e1e1b997a82e63bbd",
"version.json": "997652b3028240a35b198c40e8e5a0a7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
