import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// export default function TodoList() {
//   return (
//     // This doesn't quite work!
//     <>
//       // This doesn't quite work!
//       <h1>Hedy Lamarr's Todos</h1><img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         class="photo" /><ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul></>
//   );
// }






export default function Bio() {
  return (
    <>
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br></br>
      <b>And </b><i>pictures</i> of scientists!
    </p>
    </>
  );
}


// export default App
