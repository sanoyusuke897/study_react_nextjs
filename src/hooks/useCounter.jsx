import { useCallback, useState } from 'react'

export const useCounter = () =>{
    const [count, setCount] = useState(1); //分割代入　count = array[0], setCount = array[1]
    const [isShow, setIsShow] = useState(true); //真偽値（Boolean）
  
    const handleClick = useCallback(() => {
      if (count < 10 ) {
        setCount((prevCount) => prevCount +1) //アロー関数
      }
    }, [count]); 
    //第二引数、この変数が変わった時に、この部分だけ再レンダリング（更新、処理）されます。 useCallback
  
    const handleDisplay = useCallback(()=> {
      setIsShow((preIsShow) => !preIsShow);
        // if (isShow) {
        //   return false;
        // } 
        // return isShow ? false : true;
      },[]);
  
      return { count, isShow, handleClick, handleDisplay };
  };