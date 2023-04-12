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

export default useDebounce