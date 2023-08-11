import { StoreContextProvider } from './contexts/StoreContext'
import { Outlet } from 'react-router'
import { Footer, Header } from './components'

function App() {
  return (
    <StoreContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StoreContextProvider>
  )
}

export default App
