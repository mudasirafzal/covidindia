if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"7efa5518449ffe79412979b56eb34c8a","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"7efa5518449ffe79412979b56eb34c8a","url":"index.html"},{"revision":"d07b2058825c9fe637458e4acd0164f3","url":"precache-manifest.d07b2058825c9fe637458e4acd0164f3.js"},{"revision":"010abe3d2b1ba45c96937ceb6cdcc1ab","url":"static/css/29.93b3b32d.chunk.css"},{"revision":"007ffa05c4b66b169a82eed285ebcffb","url":"static/css/App.28326ea4.chunk.css"},{"revision":"2c58b696ed8700951866d056ea99f399","url":"static/js/0.460fffe3.chunk.js"},{"revision":"24ab3c44a0e46a6dc2f25a573fb16b53","url":"static/js/1.90be350c.chunk.js"},{"revision":"080a725dbb13d4817a7ae6acc6f895ae","url":"static/js/2.a2c8dd38.chunk.js"},{"revision":"88a170451e79a0f9676130148085ff15","url":"static/js/27.37074dbc.chunk.js"},{"revision":"4cddcaf960480e2a80c152dc9001667d","url":"static/js/28.e275e3e6.chunk.js"},{"revision":"a2626ef3d6c024b809e970417f304e34","url":"static/js/29.ceb78f1c.chunk.js"},{"revision":"76bae166360066e06624ec6c67a7ed59","url":"static/js/3.6ce861a3.chunk.js"},{"revision":"55958fb4a4505c29bdd68aa45a4b2ced","url":"static/js/30.caa37078.chunk.js"},{"revision":"1570efba1aa7328f75ec95585fc7deba","url":"static/js/31.d06474a9.chunk.js"},{"revision":"f484f6bbcf869e95acad74c9e419d892","url":"static/js/32.520927b7.chunk.js"},{"revision":"0d245f5ba3d3ffbd974da75583272334","url":"static/js/33.3bdd8e36.chunk.js"},{"revision":"886944cc452d3451d60bfe500dab8eb9","url":"static/js/34.803969f1.chunk.js"},{"revision":"55c1214c6aae96f841ad39f5e59b1e0e","url":"static/js/35.7b24e164.chunk.js"},{"revision":"db87fe744d1a80bf7e02cca5aa05c66f","url":"static/js/36.9550ecb1.chunk.js"},{"revision":"4e61ddd3d2ac7c8fb8087ed64fe8220c","url":"static/js/37.4f905d7a.chunk.js"},{"revision":"383df1d17af9d764e1c2765250414834","url":"static/js/38.a82f443d.chunk.js"},{"revision":"753cba77f44971f14422bb4cdee36c21","url":"static/js/4.e557980b.chunk.js"},{"revision":"1e46daa209993ebd2ccc9888b1280fd4","url":"static/js/About.8d71d933.chunk.js"},{"revision":"059532aaaa75b81979a8cc286ff3d0fd","url":"static/js/Actions.c192ef1b.chunk.js"},{"revision":"60106040802ec9a80f9e6f0265eb946b","url":"static/js/App.9343f225.chunk.js"},{"revision":"f251239fc36909262bd96535d7bc131a","url":"static/js/Demographics.deafa6db.chunk.js"},{"revision":"306b6802becd6ce8ae471b9e1dab3b6a","url":"static/js/Essentials.f1096c00.chunk.js"},{"revision":"dddb8b5f702e4f1a8bfdcb019038f061","url":"static/js/Footer.8f3a2b84.chunk.js"},{"revision":"0be5f5c2c1ee21d7d661c2cca5fb5948","url":"static/js/Home.ef6e4115.chunk.js"},{"revision":"9f2f993084081c910c64e16ef43c40cf","url":"static/js/LanguageSwitcher.9f89f1e9.chunk.js"},{"revision":"c130e10b070d93e7f17bf6e996f8c4f2","url":"static/js/Level.ea3c52ec.chunk.js"},{"revision":"ebe089c6ab5b57837067d0a2470cdca2","url":"static/js/main.33ef82a4.chunk.js"},{"revision":"268d85056d0e8f2c641647162f8b901f","url":"static/js/MapExplorer.891f60b0.chunk.js"},{"revision":"a9ab1e4c45c507c238455c538bae9c9b","url":"static/js/MapVisualizer.28e48895.chunk.js"},{"revision":"c07f87602b5f3d4ba20c5496026cfb27","url":"static/js/Minigraph.8d2122f0.chunk.js"},{"revision":"a2a200c478466326af434887de110dde","url":"static/js/Row.30390854.chunk.js"},{"revision":"331b9c7d45e2636bc2f668b860125b24","url":"static/js/runtime-main.f618d526.js"},{"revision":"314263753f3a97bce81e385d0eddb357","url":"static/js/Search.b9f47e6c.chunk.js"},{"revision":"edf951848d15c448ea4064adbbd8bf97","url":"static/js/State.bfdfb190.chunk.js"},{"revision":"21a9b90a7c64c25668a4f440de6961b4","url":"static/js/Table.ef326325.chunk.js"},{"revision":"778f93e34a38fd8a99b90da3b1e0760c","url":"static/js/Timeline.6f7bcd64.chunk.js"},{"revision":"78e2f70b457191a5478ab8711f8e520d","url":"static/js/TimeSeries.0112703a.chunk.js"},{"revision":"87c868fc557ed09749dd81996f287b1a","url":"static/js/TimeSeriesExplorer.67b23a1c.chunk.js"},{"revision":"960f173a48819b453100500b7b2afbb2","url":"static/js/Updates.df1b2204.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
