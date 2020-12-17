export const DESC = 'desc'
export const ASC = 'asc'

export const fnSort = (type, key, data) => {
  return data.sort((a, b) => {
    return type === ASC ? b[key] - a[key] : a[key] - b[key]
  })
}
