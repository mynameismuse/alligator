# Intro

Not every backend framework or environments can parse the http request body nicely. It is always a good way for use to adapt all situation at the start point. `Alligator` can extremely reduce the work to swap from urlencoded-form to json style. It also supported with nicely configuration with different charset maybe, null parameters exampt and so on.

# Install
```
npm install alligator-tooth
```

# Usage

To `encode` a string or json object:

```
import alligator from 'alligator-tooth'

alligator.urlencode('test')
alligator.urlencode({test: '123'})
```

To `decode` a string to whether type string or type json object:

```
import alligator from 'alligator-tooth'

alligator.json('https%3a%2f%2fgithub.com%2fmynameismuse')
```

# TODO

1. Allows to decode and encode in different charset
2. Support params null exampt in encode mode
3. Found more todos todo in this project



MIT