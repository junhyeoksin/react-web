import './App.css';
import HookUseEffect from "./HookUseEffect";
import HookUseRef from "./HookUseRef";
import Page from "./components/Page";
import {useState} from "react";
import {ThemeContext} from './context/ThemeContext';
import {UserContext} from "./context/UserContext";

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <>

      {/*  <HookUseEffect/>*/}
      {/*  <HookUseRef/>*/}
        <UserContext.Provider value={'사용자'}>
            <ThemeContext.Provider value={{isDark, setIsDark}}>
                <Page/>
            </ThemeContext.Provider>
        </UserContext.Provider>

    </>
  );
}

export default App;
