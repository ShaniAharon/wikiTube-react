import {Routes, Route} from 'react-router-dom'
import {AppHeader} from './cmps/AppHeader'
import {AppFooter} from './cmps/AppFooter'
import {WikiTubeApp} from './views/WikiTubeApp.jsx'

function App() {
  return (
    <section className="app-container container">
      <AppHeader />
      <Routes>
        <Route path="/" element={<WikiTubeApp />}></Route>
      </Routes>
      <AppFooter />
    </section>
  )
}

export default App
