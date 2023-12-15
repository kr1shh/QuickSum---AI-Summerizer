import Header from './components/Header'
import Hero from './components/Hero'
import Magic from './components/Magic'
import './App.scss'

const App = () => {
  return (
    <>
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>
        <div className="app">
          <Header/>
          <Hero/>
          <Magic/>
        </div>
      </main>
    </>
  )
}

export default App