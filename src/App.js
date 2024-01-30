
import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcept'
import Learning from './data'
import TabButton from './components/TabButton'
import { useState } from 'react'

export default function App() {

  const [tabContent, setTabContent] = useState('react');

  const handleSelect = (value) => {
    console.log("HANDLE SELECT: " + value)
    setTabContent(value)
  }

  return (
    <div className="container">
      <Header />
      <section>
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('react')}>React</TabButton>
          <TabButton onSelect={() => handleSelect('php')}>Laravel</TabButton>
          <TabButton onSelect={() => handleSelect('security')}>PHP</TabButton>
        </menu>
      </section>
      <section>

        <h3>{Learning[tabContent]['title']}</h3>
        <p>{Learning[tabContent]['hours']} hours</p>
        <p>{Learning[tabContent]['content']}</p>
      </section>
    </div>
  )
}




