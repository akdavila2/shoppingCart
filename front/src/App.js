import React, { useEffect, useState } from 'react'
import Layout from './components/Layout';


// import Cart from './components/Cart';
// import NavBar from './components/NavBar';
// import ProductDisplay from './components/ProductDisplay';
const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')
  console.log("response", response)

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------



  return (
    <>
      <Layout />

    </>
  )
}

export default App


// <ProductDisplay />
// <Cart onRemoveCart={onRemoveCart} addCart={addCart} cartItems={cartItems} />
