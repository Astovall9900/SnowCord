import React from 'react'
import Landing from './components/Landing.tsx';
import Container from './Container.tsx';

const App = () => {
  //no auth - show the landing page. 
  //When user is authorized, show the actual application - should not mutate state inside child component
  //handle it a different way
  return (
    <>
    {/* <Landing/> */}
    <Container/>
    </>
  )
}

export default App;


