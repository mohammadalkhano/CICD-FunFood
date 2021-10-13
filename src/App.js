import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import { Footer } from './components/footer/Footer'
import './shared/global/Global.css'

function App() {
  return (
    <Routing>
      <NavigationBar />
      <Footer />
    </Routing>
  )
}

export default App