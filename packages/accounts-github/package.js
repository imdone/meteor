Package.describe({
  summary: 'Login service for Github accounts',
  version: '1.4.0-beta.12'
});

Package.onUse(function (api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('github-oauth');
  api.imply('github-oauth');

  api.use(
    ['accounts-ui', 'github-config-ui'],
    ['client', 'server'],
    { weak: true }
  );
  api.addFiles('notice.js');
  api.addFiles('github.js');
});
