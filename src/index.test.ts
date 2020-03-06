/* eslint-env jest */

import getQueryParams from '.'

describe('getQueryParams', () => {
  test('it returns empty obj without location.search', () => {
    expect(getQueryParams()).toEqual({})
  })

  test('it returns the params in an object', () => {
    expect(getQueryParams('?foo=bar&baz=qux')).toEqual({
      foo: 'bar',
      baz: 'qux',
    })
  })
})
