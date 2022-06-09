import React, {useContext, useEffect, useRef} from 'react';
import {ThemeContext} from "../context/ThemeContext";

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);

        // useEffect(() => {
        //     const timer = setInterval(() => {
        //         console.log('타이머 돌아가는 중.....');
        //         setIsDark(!isDark);
        //         }, 5000);
        //          return () => {
        //              clearInterval(timer);
        //              console.log('타이  머가 종료 되었습니다. ')
        //          }
        // }, [isDark]);


    // const toggleTheme = () =>{
    //     setIsDark(!isDark);
    // }

    return (
        <div className="footer"
             style={{
                 background: isDark ? 'black' : 'lightgray',

             }}
        >

            <button className="button" onClick={() => setIsDark(!isDark)}> 배경 전환 </button>
        </div>
    );
};

export default Footer;
