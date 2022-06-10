import React, {useState, useRef, useEffect} from 'react';

const HookUseRef = () => {
    // 1. Ref 의 변화 -> NO 렌더링 -> 변수들의 값이 유지됨
    // 2. DOM 요소 접근

    const [render, setRender] = useState(0);
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef();

    console.log('countRef', countRef); //countRef.current
    console.log('HookUseRef 렌더링');  //

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}!`);
        inputRef.current.focus();

    };


    const doRendering = () => {
        setRender(render + 1);
    };

    const increaseCountState = () => {
        setCount(count + 1);
    };

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log('Ref', countRef.current);
    }
    return (
        <>
            <p> State : {count}</p>
            <p> Ref: {countRef.current}</p>
            <button onClick={increaseCountState}>state 올려</button>
            <button onClick={increaseCountRef}>countRef 올려</button>
            <button onClick={doRendering}> 렌더 버튼 </button>
            <div>
                <input ref={inputRef}   type="text" placeholder="username"/>
                <button onClick={login}  >로그인</button>
            </div>
        </>
    );
};

export default HookUseRef;
