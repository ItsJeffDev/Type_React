import './App.css'
import { Name } from './components/Name.tsx'
import ToggleButton from './components/Button.tsx'

function App() {

  return (
    <>
      <section className="App">
          <div className='App-Text'>Hello po!</div>
          <Name name="Jeff" age={18} isloggedIn={true} />
          <ToggleButton />
      </section>
    </> 
  )
}

export default App
