const getQueryParams = (search = '') =>
  search
    .substring(1)
    .split('&')
    .filter((value) => value.trim().length)
    .reduce((prev, curr) => {
      const [key, val] = curr.split('=')
      // eslint-disable-next-line fp/no-mutation
      prev[key.toLowerCase()] = decodeURIComponent(val)
      return prev
    }, {})

export default getQueryParams
