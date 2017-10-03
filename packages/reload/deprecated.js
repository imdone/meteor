// Reload functionality used to live on Meteor._reload. Be nice and try not to
// break code that uses it, even though it's internal.
// XXX COMPAT WITH 0.6.4 id:494 gh:495
Meteor._reload = {
  onMigrate: Reload._onMigrate,
  migrationData: Reload._migrationData,
  reload: Reload._reload
};
