import { vi } from 'vitest'
import { debounce } from '~/helpers/debouncer'

const FIXED_SYSTEM_TIME = '2020-01-12T00:00:00Z'

describe('debouncer.ts', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(Date.parse(FIXED_SYSTEM_TIME))
  })
  test('it properly debounces function', () => {
    const func = vi.fn()
    const debouncedFunction = debounce(func, 100)

    debouncedFunction()
    expect(func).not.toBeCalled()

    vi.advanceTimersByTime(50)
    expect(func).not.toBeCalled()

    vi.advanceTimersByTime(100)
    expect(func).toBeCalled()
    expect(func.mock.calls.length).toBe(1)
  })

  test('it properly debounces function with isImmediate set to true ', () => {
    const func = vi.fn()
    const debouncedFunction = debounce(func, 100, { isImmediate: true })

    debouncedFunction()
    expect(func).toBeCalled()
    expect(func.mock.calls.length).toBe(1)

    vi.advanceTimersByTime(50)
    expect(func.mock.calls.length).toBe(1)

    vi.advanceTimersByTime(100)
    expect(func.mock.calls.length).toBe(1)

    // it should be possible to call it second time after timeout passes
    debouncedFunction()
    expect(func.mock.calls.length).toBe(2)
  })

  test('it cancels debounced function ', () => {
    const func = vi.fn()
    const debouncedFunction = debounce(func, 100)

    const result = debouncedFunction()
    expect(func).not.toBeCalled()

    vi.advanceTimersByTime(50)
    expect(func).not.toBeCalled()

    debouncedFunction.cancel()

    vi.advanceTimersByTime(100)
    expect(func).not.toBeCalled()

    expect(result).rejects.toBeUndefined()
  })

  describe('maxWait', () => {
    test('it calls func with maxWait >= wait correctly', () => {
      const func = vi.fn()
      const debouncedFunction = debounce(func, 100, { maxWait: 150 })
      debouncedFunction()

      vi.advanceTimersByTime(50)
      expect(func).not.toBeCalled()
      debouncedFunction()

      // function should be called because of maxWait
      vi.advanceTimersByTime(100)
      expect(func).toBeCalled()
    })

    test('it calls func with maxWait < wait correctly', () => {
      const func = vi.fn()
      const debouncedFunction = debounce(func, 100, { maxWait: 50 })
      debouncedFunction()

      // function should be called because of maxWait
      vi.advanceTimersByTime(50)
      expect(func).toBeCalled()

      vi.advanceTimersByTime(50)
      expect(func.mock.calls.length).toBe(1)

      debouncedFunction()
      vi.advanceTimersByTime(100)
      expect(func.mock.calls.length).toBe(2)
    })

    test('it calls in the next tick with maxWait === 0', () => {
      const func = vi.fn()
      const debouncedFunction = debounce(func, 100, { maxWait: 0 })
      debouncedFunction()

      vi.advanceTimersByTime(1)
      expect(func).toBeCalled()
    })
  })

  describe('callback', () => {
    test('it properly debounces function with callback provided', async() => {
      const mockValue = {
        message: 'Hello World',
      }
      const callback = vi.fn()
      const func = vi.fn().mockReturnValue(mockValue)

      const debouncedFunction = debounce(func, 100, {
        callback,
      })
      const promise = debouncedFunction()
      vi.advanceTimersByTime(100)
      await promise
      expect(callback).toBeCalledWith(mockValue)
    })
  })

  describe('promises', () => {
    test('it properly debounces function and returns a Promise', async() => {
      const func = vi.fn().mockReturnValue(12345)
      const debouncedFunction = debounce(func, 100)

      const result = debouncedFunction()
      const result1 = debouncedFunction()

      vi.advanceTimersByTime(100)

      await expect(result).resolves.toEqual(12345)
      await expect(result1).resolves.toEqual(12345)
    })

    test('it properly debounces async functions', async() => {
      const asyncFunc = vi.fn().mockResolvedValue(12345)
      const debouncedFunction = debounce(asyncFunc, 100)

      const promise = debouncedFunction()

      vi.advanceTimersByTime(100)

      await expect(promise).resolves.toEqual(12345)
    })

    test('it properly rejects after debounced function is cancelled', async() => {
      const func = vi.fn()
      const debouncedFunction = debounce(func, 100)

      const result = debouncedFunction()
      const result1 = debouncedFunction()

      const reason = 'changed my mind'
      debouncedFunction.cancel(reason)

      await expect(result).rejects.toEqual(reason)
      await expect(result1).rejects.toEqual(reason)
    })
  })
})
