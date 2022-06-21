import {Routes, Route} from 'react-router-dom'
import {AppHeader} from './cmps/AppHeader'
import {WikiTubeApp} from './views/WikiTubeApp.jsx'

function App() {
  return (
    <section className="app-container container">
      <AppHeader />
      <Routes>
        <Route path="/" element={<WikiTubeApp />}></Route>
      </Routes>
    </section>
  )
}

export default App
