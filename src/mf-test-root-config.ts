import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@quasar-app",
  app: () =>
    System.import<LifeCycles>(
      "http://localhost:9000/" // add entry file
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
