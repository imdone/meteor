// Deprecated functions.

// These functions used to be on the Meteor object (and worked slightly
// differently).
// XXX COMPAT WITH 0.5.7 id:310 gh:311
Meteor.flush = Tracker.flush;
Meteor.autorun = Tracker.autorun;

// We used to require a special "autosubscribe" call to reactively subscribe to
// things. Now, it works with autorun.
// XXX COMPAT WITH 0.5.4 id:695 gh:696
Meteor.autosubscribe = Tracker.autorun;

// This Tracker API briefly existed in 0.5.8 and 0.5.9
// XXX COMPAT WITH 0.5.9 id:321 gh:322
Tracker.depend = function (d) {
  return d.depend();
};

Deps = Tracker;
