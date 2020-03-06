export const id = <T>(a: T): T => a

export const keep = <T>(xs: T[]): T[] => xs.filter(id)
