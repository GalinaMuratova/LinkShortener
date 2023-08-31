import React from 'react';
import './App.css';
import FormLink from "./features/FormLink/FormLink";

const App = () => {
  return (
   <>
     <header>
        <h2 className='main-title'>link shortener</h2>
     </header>
     <div>
       <FormLink />
     </div>
   </>
  );
}

export default App;
