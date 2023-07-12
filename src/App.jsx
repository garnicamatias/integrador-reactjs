import theme from './styles/ChakraConfig'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import Routes from './routes/Routes'

function App() {

  return (
    <>
    <ChakraProvider theme={theme}>
      <Layout>
      <Navbar/>
      <Routes/>
      <Footer/>
      </Layout>
    </ChakraProvider>
    </>
  )
}

export default App
