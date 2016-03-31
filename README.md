# has-launchd

Tells if macos [launchd](http://nathangrigg.net/2012/07/schedule-jobs-using-launchd/) is available.

## Usage

```js
require('@mh-cbon/has-launchd')(function (err, launchdPath) {
  console.log("This system runs launchd : %s", err?"no":"yes");
  launchdPath && console.log("Found launchd at path : %s", launchdPath)
})
```

## Testing

#### mac

To run the __mac__ tests on a fedora-like box,

- download and install [vagrant](https://www.vagrantup.com/)
- execute `npm run test-mac`
- wait, a looooooonnnnggggg time. Mac images are very big....


#### linux
To run the __linux__ tests on a fedora-like box,

- download and install `vagrant`
- execute `npm run test-not-mac`

or just

- download and install `mocha`
- `mocha test/not-mac.js`

## TODOS

- add tests for macos/lion
- ~~add tests for macos/maverick~~
- add tests for macos/el-capitan
