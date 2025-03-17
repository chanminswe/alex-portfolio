import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { ScreenSizeContextProvider } from './context/ScreenSizeContextProvider';
const App = () => {
  return (
    <>
      <ScreenSizeContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </ScreenSizeContextProvider>
    </>
  )
}

export default App
