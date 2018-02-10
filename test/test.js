var test = require('../lib')

console.log(
  test.json(
    {
      test: '1'
    }
  )
)

let decode = test.json({test:1})

console.log(test.urlencode(decode))