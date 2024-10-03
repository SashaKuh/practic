import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.tsx'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    red: 'red',
    green: 'green',
    orange: 'orange'
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
