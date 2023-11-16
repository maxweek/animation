import { FC, useEffect } from 'react'
// import Header from './components/ui/header/header'
import Sidebar from './components/ui/sidebar/sidebar'
import { Section } from './components/ui/section/section'
import SectionList from './sections/list'
import GUI from './components/ui/gui/gui';

const App: FC = () => {
  useEffect(() => {
  }, [])
  return (
    <div id="__site_wrapper" className={`App`}>
      {/* <Header /> */}
      <Sidebar />
      <main>
        <SectionList />
      </main>
      <GUI />
    </div>
  )
}

export default App
