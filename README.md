# COVID19 Twitter Bot

[COVID19TwitterBot](https://github.com/LennyDennis/COVID19TwitterBot) is a twitter bot that gives latest statics on COVID-19 in the world and Kenya. It tweets the updates after every 6 hours.


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/LennyDennis/COVID19TwitterBot.svg?&colorB=ff0000)](https://github.com/LennyDennis/COVID19TwitterBot/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/LennyDennis/COVID19TwitterBot.svg?colorB=1FBF14)](https://github.com/LennyDennis/COVID19TwitterBot/pulls)

<p>
  <a href="https://twitter.com/intent/follow?screen_name=covid19_kenya">
    <img src="https://img.shields.io/twitter/follow/covid19_kenya.svg?style=social"
      alt="follow on Twitter"></a>
</p>

## Features

### Tweets the world and Kenya COVID19 stats after every 6 hours.
![Statistics Tweet](/images/screenshot.png)

## Contributing

This bot manipulates tweets by connecting to the
[Twitter API](https://developer.twitter.com/en/docs) via the `twit`
npm package. Please refer to the `twit`
[documentation](https://github.com/ttezel/twit) to make substantial
changes.

You can help by:

* Solving existing
  [issues](https://github.com/LennyDennis/COVID19TwitterBot/issues?q=is%3Aopen+is%3Aissue)
* Adding more functionalities to the bot
  ([see issues](https://github.com/LennyDennis/COVID19TwitterBot/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement))
* Pointing out bugs/errors

For any of the above, please create an issue so that it can be
addressed. New to GitHub issues? You can familiarize yourself with
them using GitHub's
[guide](https://help.github.com/articles/creating-a-pull-request/).

#### Setup

* You will need your _own_ Twitter account for testing, since the bot
  tweets from this account. Generate your Twitter API keys by
  [creating a new app](https://apps.twitter.com/app/new).
* Fork this repository.
* Create a `config.js` file and add in your API keys and details,
  like so:

```
module.exports = {
    consumer_key:         'xxxxxxxxxxxxxxxxxxxxxxxxx',
    consumer_secret:      'xxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token:         'xxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token_secret:  'xxxxxxxxxxxxxxxxxxxxxxxxx',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
}

```



#### Make the Change

* Run `node index.js` to start the bot. :+1:
* Make your suggested change.
* Test your change.
* Create a pull request.

---

### License

MIT License

Copyright (c) 2020 - Present **LennyDennisMacharia**


