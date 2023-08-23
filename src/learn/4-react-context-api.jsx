import debounce from '@/utils/debounce';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

/* Context ------------------------------------------------------------------ */
//Modern Hooks / Legacy에서는 Context.Cosumer + Render Props or HOC Pattern

// JSX
// React.createElement

//Context 생성
//React.createContext(초기값) <- 읽기 전용

//Context 공급자(Provider)
// 값(value) <- 읽기/쓰기
// useState()

//Context 값 꺼내기
//React.useContext

// 1. Context 생성
//StateManagementContext
const SM_Context = createContext();
// Theme 상태
const ThemeContext = createContext();
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
const CHANGE_LIGHT_THEME = 'CHANGE_LIGHT_THEME'
const CHANGE_DARK_THEME = 'CHANGE_DARK_THEME'
const RESET_THEME = 'RESET_THEME'
const SWITCH_MODE = 'SWITCH_THEME'

//Reducer Function
const reducer = (state, action) => {
  switch(action.type) {

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

/* Component ---------------------------------------------------------------- */

function ReactContextAPI() {
  // 상태
  const [color, setColor] = useState({
    fg: 'text-blue-50',
    bg: '#1170a3',
  });

  // 상태 업데이트 이벤트 핸들러
  const handleChangeBgColor = debounce(
    (newBgColor) =>
      setColor((color) => ({
        ...color,
        bg: newBgColor,
      })),
    600
  );

  //컨텍스트 값으로 공급
  //1. React.useState
  // const [theme, setTheme] = useState({
  //   light: {
  //     fg: 'black',
  //     bg: 'white',
  //   },
  //   dark: {
  //     fg: 'white',
  //     bg: 'black',
  //   },
  // });

  // const usingStateValue = {
  //   theme,
  //   setTheme,
  // };

  //2. React.useReducer(like Redux)
  const [theme, dispatch] = useReducer(reducer, initialTheme);


  const contextValue = {
    version: '0.0.1',
    theme: {
      light: {
        fg: 'black',
        bg: 'white',
      },
      dark: {
        fg: 'white',
        bg: 'black',
      },
    },
  }

  return (
    <ThemeContext.Provider
      // value={contextValue}
      // displayName="SM_COntextProvider"
      displayName="ThemeContext.Provider"
      //1. value={usuinStateValue}
      //2. value={{theme, dispatch}}
      value={{theme, dispatch}}
    >
      <div
        className="PassingProps p-5 rounded-md"
        style={{ backgroundColor: color.bg }}
      >
        <GrandParent color={color} onChangeColor={handleChangeBgColor} />
      </div>
    </ThemeContext.Provider>
  );
}

export default ReactContextAPI;

/* -------------------------------------------------------------------------- */

function GrandParent({ color, onChangeColor }) {
  return (
    <div
      className="GrandParent p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 20%)`,
      }}
    >
      <Parent color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

function Parent({ color, onChangeColor }) {
  return (
    <div
      className="Parent p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 40%)`,
      }}
    >
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

function Child({ color, onChangeColor }) {
  return (
    <div
      className="Child p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 60%)`,
      }}
    >
      <GrandChild color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

function GrandChild({ color, onChangeColor }) {
  //2. 컨텍스트 값을 부여
  // const contextValue = useContext(SM_Context);
  const {theme, dispatch} = useContext(ThemeContext);
  console.log(theme, dispatch)
  const currentTheme = theme[theme.currentMode]
  const handleSwitchThemeMode = () => {
    dispatch({
        type: SWITCH_MODE
      })
  }

  return (
    <div
      className="GrandChild p-4 rounded-md flex flex-col justify-center items-center "
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 80%)`,
      }}
    >
      <p className={`${color.fg} mb-2 font-extrabold text-center drop-shadow-md`}
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.fg
      }}>
        컨텍스트 공급자(Context Provider)를 사용해<br /> 
        데이터를 공급(provide)해주세요!
      </p>
        <button type="button" onClick={handleSwitchThemeMode} className='p-2 border border-white'>
          <span className='uppercase'>
          {theme.currentMode.includes('light') ? 'dark' : 'light'}테마 스위치
          </span>
          </button>
      <input
        type="color"
        aria-label="배경 색상"
        defaultValue={color.bg}
        onChange={(e) => {
          onChangeColor(e.target.value);
        }}
      />
    </div>
  );
}