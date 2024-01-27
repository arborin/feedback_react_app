
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcept'
import Learning from './data'
import TabButton from './components/TabButton'

export default function App() {
  console.log(Learning)
  return (
    <div className="container">
      <Header />
      <ul>
        <CoreConcepts {...Learning[0]} />
        <CoreConcepts title="PHP/Laravel" hours={55.5} />
      </ul>
      <section>
        <h2>Examples</h2>
        <menu>
          <TabButton>React</TabButton>
          <TabButton>Laravel</TabButton>
          <TabButton>PHP</TabButton>
        </menu>
      </section>
    </div>
  )
}




