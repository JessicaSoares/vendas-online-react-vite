import { useState } from 'react'

import { Button } from 'antd'
import styled from 'styled-components'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StyledLink>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </StyledLink>
      <h1>Vite + React</h1>
      <StyledLink className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is
          {count}
        </Button>
        <p>Edit src/App.tsx and save to test HMR</p>
      </StyledLink>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
const StyledLink = styled.div`
  color: blue;
  font-weight: bold;
`

export default App
