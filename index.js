var spawn = require('child_process').spawn;

function hasLaunchd (then) {
  if (!process.platform.match(/darwin/)) return process.nextTick(function () {
    then('not macos')
  });

  var s = spawn('which', ['launchd'], {stdio: 'pipe'})

  var launchdPath;
  s.stdout.on('data', function (data) {
     launchdPath = data.toString().replace(/\s*$/, '');
  })

  s.on('close', function (code) {
     if (code===0) return then (undefined, launchdPath)
     then('not found')
  })
}

module.exports = hasLaunchd;
