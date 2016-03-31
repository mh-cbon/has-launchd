var should = require('should')

describe('hasLaunchd', function() {
  it('returns true on macos', function(done) {
    require('../index.js')(function (err, launchdPath) {
      (err===undefined).should.be.true;
      (launchdPath).should.match(/\/launchd$/);
      done();
    })
  });
});
