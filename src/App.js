import { useState } from 'react';
import './App.css';

function App() {
  let list = [1, 2, 3];
  // let number = 1;
  const [number, setNumber] = useState(1); //setNumber 로 변경함
  const add = () => {
    setNumber(number + 1); //number 값 변경을 요청함
    console.log('add', setNumber);
  };
  return (
    <>
      <div>{list.map((n) => n)}</div>
      {/* forEach 는 void  */}

      <div>
        <h1>숫자: {number}</h1>
        <button onClick={add}>더하기</button>
      </div>
    </>
  );
}

export default App;
