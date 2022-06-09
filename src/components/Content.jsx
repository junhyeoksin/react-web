import React, {useContext} from 'react';
import {ThemeContext} from "../context/ThemeContext";
import {UserContext} from "../context/UserContext";
import HookUseReducer from "../HookUseReducer";
import HookUseReducerCR from "../HookUseReducerCR";

const Content = () => {

    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (

        <>
            <div>
                <HookUseReducer></HookUseReducer>
            </div>
            <div>
                <HookUseReducerCR/>
            </div>

        <div className="content"
         style={{
             background: isDark ? 'black' : 'white',
             color: isDark ? 'white' : 'black',
         }}
        >

            <p> {user}님, 좋은 하루 되세요!</p>
        </div>
        </>
    );
};

export default Content;
