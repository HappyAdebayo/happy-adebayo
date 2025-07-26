import Portfolio from './pages/home'
import Layout from './layout/layout'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
  <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Portfolio/>}/>
      </Route>
  </Routes>
  )
}

export default App
