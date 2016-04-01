var mo = require('../index');
var t = require('tap');


t.equal(mo('mo39').is39(), true);
t.equal(mo('mo39m').is39(), true);
t.equal(mo('mo39M').is39(), true);
t.equal(mo('Mo39').is39(), true);
t.equal(mo('Mo39m').is39(), true);
t.equal(mo('Mo39M').is39(), true);
t.equal(mo('膜39').is39(), true);
t.equal(mo('膜39m').is39(), true);
t.equal(mo('膜39M').is39(), true);