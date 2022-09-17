import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import Feedbackstats from './components/Feedbackstats'

import Feedbackform from './components/Feedbackform'
import AboutIconList from './components/AboutIconList'
import aboutPage from './pages/aboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Feedbackform />
                  <Feedbackstats />
                  <Feedbacklist />
                </>
              }
            ></Route>

            <Route path='/about' element={<aboutPage />} />
          </Routes>
          {/* <AboutIconList /> */}
        </div>
      </Router>
    </FeedbackProvider>
  )
}
export default App
