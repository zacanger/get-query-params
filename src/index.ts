const getQueryParams = (search = '') => {
  const params = {}
  search
    .substring(1)
    .split('&')
    .filter((value) => value.trim().length)
    .forEach((part) => {
      const [key, value] = part.split('=')
      // eslint-disable-next-line fp/no-mutation
      params[key.toLowerCase()] = decodeURIComponent(value)
    })
  return params
}

export default getQueryParams
