const calculatorApp = "rock-paper-scissors-v1";
const link = "/Rock-Paper-Scissors";
const assets = [
    `${link}/`,
    `${link}/index.html`,
    `${link}/CSS/main.css`,
    `${link}/CSS/aboutMe.css`,
    `${link}/CSS/all.min.css`,
    `${link}/CSS/mobileNav.css`,
    `${link}/CSS/Normalize.css`,
    `${link}/JS/main.js`,
    `${link}/JS/helpers.js`,
    `${link}/JS/Vars.js`,
    `${link}/images/favicon-32x32.png`,
    `${link}/images/bg-pentagon.svg`,
    `${link}/images/bg-triangle.svg`,
    `${link}/images/icon-close.svg`,
    `${link}/images/icon-lizard.svg`,
    `${link}/images/icon-paper.svg`,
    `${link}/images/icon-scissors.svg`,
    `${link}/images/icon-spock.svg`,
    `${link}/images/image-rules-bonus.svg`,
    `${link}/images/image-rules.svg`,
    `${link}/images/logo-bonus.svg`,
    `${link}/images/logo.svg`,
    `${link}/webfonts/fa-brands-400.eot`,
    `${link}/webfonts/fa-brands-400.svg`,
    `${link}/webfonts/fa-brands-400.ttf`,
    `${link}/webfonts/fa-brands-400.woff`,
    `${link}/webfonts/fa-brands-400.woff2`,
    `${link}/webfonts/fa-regular-400.eot`,
    `${link}/webfonts/fa-regular-400.svg`,
    `${link}/webfonts/fa-regular-400.ttf`,
    `${link}/webfonts/fa-regular-400.woff`,
    `${link}/webfonts/fa-regular-400.woff2`,
    `${link}/webfonts/fa-solid-900.eot`,
    `${link}/webfonts/fa-solid-900.svg`,
    `${link}/webfonts/fa-solid-900.ttf`,
    `${link}/webfonts/fa-solid-900.woff`,
    `${link}/webfonts/fa-solid-900.woff2`,
];

self.addEventListener("install", installEvent => {
    installApp(installEvent);
});

function installApp(installEvent) {
    installEvent.waitUntil(
        caches.open(calculatorApp).then(cache => {
            cache.addAll(assets);
        })
    )
}

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});