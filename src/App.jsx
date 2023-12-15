import Header from './components/Header'
import Hero from './components/Hero'
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
        </div>
      </main>
    </>
  )
}

export default App