import { useEffect } from 'react'

export const useBgLightBlue =() => {
    useEffect(() => {
      document.body.style.backgroundColor="lightblue"; //mount時
      return () => {
        document.body.style.backgroundColor=""; //unmount時
      };
    }, []);
  }