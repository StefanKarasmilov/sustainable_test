import * as stats from './stats'

export const sum = (numbers: number[]) => {
  return Promise.resolve(stats.sum(numbers))
}

export const average = (numbers: number[]) => {
  return Promise.resolve(stats.average(numbers))
}
