var should = require('should')

describe('hasLaunchd', function() {
  it('returns false on non-macos', function(done) {
    require('../index.js')(function (err, launchdPath) {
      (err===undefined).should.be.false;
      (launchdPath===undefined).should.be.true;
      done();
    })
  });
});
