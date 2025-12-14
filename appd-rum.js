/**
 * AppDynamics Browser RUM bootstrap (shared across pages)
 * Update ONLY if required:
 *   - config.appKey (Browser App key)
 *   - config.beaconUrlHttps (collector)
 */
window["adrum-start-time"] = new Date().getTime();
(function (config) {
  config.appKey = "SY-AAC-MTW";
  config.adrumExtUrlHttps = "https://cdn.appdynamics.com";
  config.beaconUrlHttps = "https://syd-col.eum-appdynamics.com";
  config.useHTTPSAlways = true;
})(window["adrum-config"] || (window["adrum-config"] = {}));

// Load the agent asynchronously
(function () {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://cdn.appdynamics.com/adrum/adrum-25.5.0.4580.js";
  document.head.appendChild(s);
})();
