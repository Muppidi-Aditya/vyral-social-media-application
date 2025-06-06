import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
          <Route path="/test" exact element={<Test />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App