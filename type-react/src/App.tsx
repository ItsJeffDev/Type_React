import './App.css'
import { Name } from './components/Name.tsx'
import ToggleButton from './components/Button.tsx'
import {Person} from './components/Person.tsx'
import { NameList } from './components/NameList.tsx'
import {languages} from './components/languages.ts'

function App() {
  const personName = {
    first: "Jeff Kolin",
    last: "Miranda"
  }
  const personList = [
    {
      first: "Mary Kathleen",
      last: "Miranda"
    },
    {
      first: "Jeff Lance",
      last: "Miranda"
    }
  ]
  return (
    <>
      <section className="App">
          <div className='App-Text'>Hello po!</div>
          <Name name="Jeff" age={18} isloggedIn={true} />
          <Person name={personName} />
          {
            languages.map((language) => {
              return (
                <div key={language.name}>{language.name}</div>
              )
            })
          }
          <NameList names={personList} />
          <ToggleButton />
      </section>
    </> 
  )
}

export default App
