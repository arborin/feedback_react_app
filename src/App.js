
import Header from './components/Header/Header'
// import CoreConcepts from './components/CoreConcept'
import Learning from './data'
import TabButton from './components/TabButton'
import { useState } from 'react'
import Section from './components/Section'
import Tabs from './components/Tabs'

export default function App() {

  const [tabContent, setTabContent] = useState();

  const handleSelect = (value) => {
    console.log("HANDLE SELECT: " + value)
    setTabContent(value)
  }

  let content = <p>please select topic</p>

  if (tabContent) {
    content = <div><h3>{Learning[tabContent]['title']}</h3>
      <p>{Learning[tabContent]['hours']} hours</p>
      <p>{Learning[tabContent]['content']}</p>
    </div>
  }

  return (
    <div className="container">
      <Header />
      <Section title='Web Page'>
        <Tabs buttons={<>
          <TabButton isSelected={tabContent === 'react'} onSelect={() => handleSelect('react')}>React</TabButton>
          <TabButton isSelected={tabContent === 'php'} onSelect={() => handleSelect('php')}>Laravel</TabButton>
          <TabButton isSelected={tabContent === 'security'} onSelect={() => handleSelect('security')}>PHP</TabButton>
        </>}>

          <section>
            {content}
          </section>
        </Tabs>
        <menu>

        </menu>
      </Section>

    </div>
  )
}




