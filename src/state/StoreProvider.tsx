import React, {
  createContext,
  useReducer,
  useContext,
  ReactElement,
  Reducer,
} from 'react'

import middlewares from './middlewares'

const StoreContext = createContext(
  []
)

export const StoreProvider: React.SFC<StoreProviderProps> = (
  {
    reducer,
    initialState,
    children,
  }
): ReactElement => {
  const [ state, dispatch, ] = useReducer(
    reducer, initialState
  )

  middlewares(
    null, null, state
  )

  return (
    <StoreContext.Provider value={[ state, dispatch, ]}>{children}</StoreContext.Provider>
  )
}

interface StoreProviderProps {
  reducer: Reducer<any, any>;
  initialState: object;
}

export const useGlobalState = (): any[] => useContext(
  StoreContext
)
