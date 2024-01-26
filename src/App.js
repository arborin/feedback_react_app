
import Header from './components/Header'
import CoreConcepts from './components/CoreConcept'
import Learning from './data'

export default function App() {
  console.log(Learning)
  return (
    <div className="container">
      <Header />
      <ul>
        <CoreConcepts {...Learning[0]} />
        <CoreConcepts title="PHP/Laravel" hours={55.5} />
      </ul>
    </div>
  )
}




