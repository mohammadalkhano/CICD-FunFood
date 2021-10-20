import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/global/Global.css'


function App() {
  
  return (
    <Routing>
      <NavigationBar />
    </Routing>
    
  )
}

export default App