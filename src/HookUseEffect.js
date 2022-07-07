import React from 'react';
import {useEffect, useState} from "react";

/**
 * useEffect : 렌더링 이후에 어떤 일을 수행하는지 말한다.
 * React 는 우리가 넘긴 함수를 기억했다가 Dom 업데이트를 수행한 이후 불러옴
 * 컴포넌트 안에서 불러오는 이유 : ㅎ마수 범위 안에 존재하면 특별한 api 없이도 값을 얻을 수 있음
 *
 */
const HookUseEffect = () => {

    // 초기 값을 가져올 때 무거운 작업을 해야한다면 바로 안에 값을 넣어주는 것이 아니라 콜백 형태로 넣어주면
    // 맨처음 화면이 렌더링 될때만 불러온다.
    const heavyWork = () => {
        console.log('엄청 무거운 작업');
        return ['홍길동', '김민수'];
    }


    const [number, setNumber] = useState(1);

    // 렌터링 될 때 마다 실행됨.
    useEffect(() => {
        document.title = `useEffect 사용, 증가 ${number}`;
        // useEffect 를 컴포넌드 안에 불러오는 이유: effect를 통해 number state 에 접근
        // 함수 범위 안에 존재하기 때문에 특별한 api 없이도 값을 얻을 수 있다.
        console.log('렌더링');
    }, [number]);


    const add = () => {
        setNumber(number + 1);

        let newNumber;
        if(number >= 10){
            newNumber = 1;
        }else {
            newNumber = number + 1;
        }
        setNumber(newNumber);
        console.log('add', setNumber);
    };

    const minus = () => {
        setNumber(number - 1);

        let newNumber;
        if(number < 1){
            newNumber = 0;
        }else {
            newNumber  = number - 1;
        }
        setNumber(newNumber);
        console.log('minus', setNumber);
    };



    const [name, setName] = useState( () =>  { return heavyWork()});
    const [input, setInput] = useState('');


    const handleInputChange = (e) => {
        setInput(e.target.value);
        // console.log('이벤트 발생 ', input);
    }

    const handleUpdate = () => {
        setName((prevState) => {
            console.log('이전 state: ', prevState);
            return[input, ...prevState];
        })
    }

    const inputDelete = (e) =>{
        console.log('삭제')
    }

    return (
        <>
        <div>
            <h4> 숫자: {number}</h4>
            <button onClick={add}>더하기</button>
            <br/>
            <button onClick={minus}>빼기 </button>
            <br/>
            <button onClick={()=> setNumber(number + 1)}>  useEffect 더하기  </button>
        </div>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick = {handleUpdate}>update </button>
            {name.map((name, idx) => {
                return <p key={idx} >{ name }  <button> 삭제</button> </p>;
            })}
            <div>{input}</div>
        </>
);
};


export default HookUseEffect;
