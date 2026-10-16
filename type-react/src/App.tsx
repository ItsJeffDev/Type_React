import './App.css'
import { Name } from './components/Name.tsx'
import ToggleButton from './components/Button.tsx'
import {Person} from './components/Person.tsx'
import { NameList } from './components/NameList.tsx'
import {languages} from './components/languages.ts'
import {Status} from './components/Status.tsx'

function App() {
  const personName = {
    first: "Jeff Kolin",
    last: "Miranda"
  }
  const personList = [
    {
      first: "Mary Kathleen",
      last: "Miranda",
      status: 201
    },
    {
      first: "Jeff Lance",
      last: "Miranda",
      status: 200
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
          <Status status={personList} >
      </section>
    </> 
  )
}

export default App
