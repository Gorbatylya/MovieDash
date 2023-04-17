import React, { useState, useEffect } from 'react';


function useDebounce(value:any, delay:any) {
   // для отложенного значения
   const [debouncedValue, setDebouncedValue] = useState(value);

   useEffect(
      () => {
         const handler = setTimeout(() => {
            setDebouncedValue(value);
         }, delay);

         
         return () => {
            clearTimeout(handler);
         };
      },
      // Вызывается снова ток если значение изм
  
      [value]
      
   );

   return debouncedValue;
}




// export const useDebounce = (func: any, timeout: any) => {
//    let timer: any;
//    return (e: any) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//          func(e);
//       }, timeout);
//    };
// };

export default useDebounce