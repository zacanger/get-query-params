/* eslint-env jest */

import { id, keep } from './'

describe('index', (): void => {
  describe('id', (): void => {
    it('is the identity function', (): void => {
      expect(id(1)).toBe(1)
    })
  })

  describe('keep', (): void => {
    it('keeps truthy items', (): void => {
      expect(keep([false, true, 0, 1, '', 'asdf'])).toEqual([true, 1, 'asdf'])
    })
  })
})
