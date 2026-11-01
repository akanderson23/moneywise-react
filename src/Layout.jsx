import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Footer from './components/Footer'

function Layout() {
  const { pathname } = useLocation()

  // start each new page at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: { fontFamily: "'Geist', Arial, Helvetica, sans-serif", color: 'var(--navy)', borderRadius: '8px' },
          success: { iconTheme: { primary: 'var(--gold)', secondary: 'var(--white)' } },
        }}
      />
    </>
  )
}

export default Layout
