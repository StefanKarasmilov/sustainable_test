export const expect = <T>(expected: T) => {
  return {
    toBe: (result: T) => {
      if (result !== expected) {
        throw new Error(`${ result } is not equal to ${ expected }`)
      }
    }
  }
}

export const test = async (description: string, callback: () => void) => {
  try {
    await callback()
    console.log(`PASS ${ description }`)
  } catch (error) {
    console.log(`FAIL ${ description }`)
    console.log(error)
  }
}

export const it = test

export const describe = (description: string, callback: () => void) => {
  console.log(description)
  callback()
}
