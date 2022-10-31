import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test.each([
    ['good', { good: 1, ok: 0, bad: 0 }],
    ['ok', { good: 0, ok: 1, bad: 0 }],
    ['bad', { good: 0, ok: 0, bad: 1 }],
    ['zero', { good: 0, ok: 0, bad: 0 }],
  ])('%p is incremented', (actionType, expectedState) => {
    const action = {
      type: actionType.toLocaleUpperCase()
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual(expectedState)
  })
})