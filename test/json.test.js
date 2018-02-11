var alligator = require('../lib')

test('decode string', () => {
  expect(alligator.json('test')).toBe('test')
  expect(alligator.json('https%3a%2f%2fgithub.com%2fmynameismuse')).toBe('https://github.com/mynameismuse')
})

test('decode json', () => {
  expect(alligator.json('%7b%22test%22%3a%221%22%2c%22website%22%3a%22https%3a%2f%2fgithub.com%2fmynameismuse%22%7d'))
    .toEqual('{"test":"1","website":"https://github.com/mynameismuse"}')
  expect(alligator.json('%7b%22test%22%3a%221%22%2c%22test2%22%3a%7b%22website%22%3a%22https%3a%2f%2fgithub.com%2fmynameismuse%22%2c%22test%22%3a%221%22%7d%7d'))
    .toEqual('{"test":"1","test2":{"website":"https://github.com/mynameismuse","test":"1"}}')
})