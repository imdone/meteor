Package.describe({
  summary: "A minimalist client-side MVC framework",
  version: "1.0.0"
});

Package.onUse(function (api) {
  // XXX Backbone requires either jquery or zepto id:141 gh:142
  api.use(["jquery", "json", "underscore"]);

  api.addFiles("backbone.js");
});
