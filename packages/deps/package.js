// XXX rename package? id:176 gh:177

Package.describe({
  summary: "Deprecated: Use the 'tracker' package instead.",
  version: '1.0.12'
});

Package.onUse(function (api) {
  api.use('tracker');
  api.imply('tracker');

  // XXX COMPAT WITH PACKAGES BUILT FOR 0.9.0. id:153 gh:154
  //
  // (in particular, packages that have a weak dependency on this
  // package, since then exported symbols live on the
  // `Package.deps` object)
  api.export('Tracker');
  api.export('Deps');
});
