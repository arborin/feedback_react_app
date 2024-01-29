
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcept'
import Learning from './data'
import TabButton from './components/TabButton'

export default function App() {


  const handleSelect = (value) => {
    console.log("HANDLE SELECT: " + value)
  }

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
          <TabButton onSelect={() => handleSelect('react')}>React</TabButton>
          <TabButton onSelect={() => handleSelect('laravel')}>Laravel</TabButton>
          <TabButton onSelect={() => handleSelect('php')}>PHP</TabButton>
        </menu>
      </section>
      <section>
        CONTENT
      </section>
    </div >
  )
}




