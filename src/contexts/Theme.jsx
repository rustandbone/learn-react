import { createContext, useContext, useMemo, useReducer } from 'react';
import { node, string } from 'prop-types';

// 1. Context 생성
const ThemeContext = createContext();

//상태 초기갓
const initialTheme = {
  currentMode: 'light',
  light: {
    fg: 'black',
    bg: 'white',
  },
  dark: {
    fg: 'white',
    bg: 'black',
  },
}

//Action Types
export const CHANGE_LIGHT_THEME = 'CHANGE_LIGHT_THEME'
export const CHANGE_DARK_THEME = 'CHANGE_DARK_THEME'
export const RESET_THEME = 'RESET_THEME'
export const SWITCH_MODE = 'SWITCH_THEME'

// 액션 크리에이터 (함수)
export const resetTheme = () => ({
  type: RESET_THEME,
});

export const changeLightTheme = (newLightTheme) => ({
  type: CHANGE_LIGHT_THEME,
  payload: newLightTheme,
});

export const changeDarkTheme = (newDarkTheme) => ({
  type: CHANGE_LIGHT_THEME,
  payload: newDarkTheme,
});

export const switchMode = () => ({
  type: SWITCH_MODE,
});

//Reducer Function
const reducer = (state, action) => {
  switch (action.type) {

    case SWITCH_MODE:
      return {
        ...state,
        currentMode: state.currentMode.includes('light') ? 'dark' : 'light',
      };
    case CHANGE_LIGHT_THEME:
      return {
        ...state,
        light: action.payload
      };
    case CHANGE_DARK_THEME:
      return {
        ...state,
        dark: action.payload
      };
    case RESET_THEME:
      return initialTheme;
    default:
      return state;
  }
}

function ThemeProvider({ displayName = "ThemeContext.Provider", children }) {
  const [theme, dispatch] = useReducer(reducer, initialTheme);

  //메모이제이션
  const themeValue = useMemo(() => ({
    theme, dispatch
  }), [theme])

  return (
    <ThemeContext.Provider
      displayName={displayName}
      value={themeValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  displayName: string,
  children: node
}

export default ThemeProvider;

//커스텀 훅
export function useTheme() {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error('useTheme은 ThemeProvider 내부에서만 사용 가능합니다.')
  }
  return contextValue.theme;
}

export function useDispatch() {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error(
      'useDispatch 훅은 ThemeProvider 내부에서만 사용 가능합니다.'
    );
  }
  return contextValue.dispatch;
}