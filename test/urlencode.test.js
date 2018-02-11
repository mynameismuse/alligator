var alligator = require('../lib')

test('encode string', () => {
  expect(alligator.urlencode('test')).toBe('test')
  expect(alligator.urlencode('https://github.com/mynameismuse')).toBe('https%3a%2f%2fgithub.com%2fmynameismuse')
})

test('encode json', () => {
  expect(alligator.urlencode(
    {
      test: '1',
      website: 'https://github.com/mynameismuse'
    }
  )).toBe('%7b%22test%22%3a%221%22%2c%22website%22%3a%22https%3a%2f%2fgithub.com%2fmynameismuse%22%7d')

  expect(alligator.urlencode(
    {
      test: '1',
      test2: {
        website: 'https://github.com/mynameismuse',
        test: '1'
      }
    }
  )).toBe('%7b%22test%22%3a%221%22%2c%22test2%22%3a%7b%22website%22%3a%22https%3a%2f%2fgithub.com%2fmynameismuse%22%2c%22test%22%3a%221%22%7d%7d')
})