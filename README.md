# get-query-params

[![npm version](https://img.shields.io/npm/v/get-query-params.svg)](https://npm.im/get-query-params) [![CircleCI](https://circleci.com/gh/zacanger/get-query-params.svg?style=svg)](https://circleci.com/gh/zacanger/get-query-params) [![codecov](https://codecov.io/gh/zacanger/get-query-params/branch/master/graph/badge.svg)](https://codecov.io/gh/zacanger/get-query-params) [![Maintainability](https://api.codeclimate.com/v1/badges/081700f7a21958f070df/maintainability)](https://codeclimate.com/github/zacanger/get-query-params/maintainability) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

## Usage

```shell
npm i get-query-params
```

```javascript
import getQueryParams from 'get-query-params'

const params = getQueryParams(window.location.search)
// Returns a JS object

// If the url is http://example.com?foo=bar%baz=quux,
// return value is
{ foo: 'bar', baz: 'quux' }
```

[License](./LICENSE.md)
