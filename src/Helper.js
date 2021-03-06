import { useState, useEffect,  } from 'react';

export default function useDebounce(value, delay) {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect( () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },[value, delay] );

  return debouncedValue;

}


// export default function debounce(a,b,c){
//     var d,e;
//     return function(){
//       function h(){
//         d=null;
//         c||(e=a.apply(f,g));
//       }
//       var f=this,g=arguments;
//       return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
//     }
//   }

  // export default function debounce(fn, delay){
  //   let timer;
  //   return function(){
  //     var args = arguments;
  //     var context=this;
  //     clearTimeout(timer);
      
  //     timer=setTimeout(()=>{
  //       fn.apply(context, args)
  //     },delay)
  //   }
  // }
  
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };