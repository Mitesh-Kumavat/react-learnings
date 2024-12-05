import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Head from './Head.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <Head />
      <Nav />
    </>
  </StrictMode>,
)


//                    Virtual DOM
// Now it is not used .. this topic is used in older react
// read about it on : React fiber : github repo 7year ago (acdlit) <- user
