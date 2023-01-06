import { useEffect, useState } from "react";

export const App = () => {
  const [padding, setPadding] = useState(0);

  // useEffect(() => {
  //   setInterval( () => {
  //     setPadding(oldPadding => {
        
  //       return oldPadding + 1;
  //     })
  //   }, 10000);
  // });

  return (
    <div style={{backgroundColor: 'black', color: 'white', padding: padding}}>
     Test
    </div>
  );
}
