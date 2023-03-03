import { useCallback, useState } from 'react'

export const useInputArray = () => {
    const [text, setText] = useState(""); //文字列
    const [array, setArray] = useState([]); //配列
  
    const handleChange = useCallback((e) => { 
      if (e.target.value.length > 5) {
        alert("5文字以内にしてください");
        return;
      }
      setText(e.target.value.trim());
    },[]);
  
    const handleAdd = useCallback(()=> {
      setArray((prevArray) => {
        //const newArray = prevArray;
        // newArray.push(1);
        if (prevArray.some(item => item === text)) {
          alert("同じ要素が既に存在します。")
        }
        const newArray = [...prevArray, text]; //スプレッド構文
        return newArray;
      });
    },[text])
  
    return { text, array, handleChange, handleAdd };
  };