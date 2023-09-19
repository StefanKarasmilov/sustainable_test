export const sum = (numbers: number[]): number => {
  return numbers.reduce((previous, current) => previous + current)
}

export const average = (numbers: number[]) => {
  return sum(numbers) / numbers.length
}
