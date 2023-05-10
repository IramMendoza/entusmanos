import './App.css'
import Head from './components/Head'
import Logo from './components/Logo'
import List from './components/List'
import Form from './components/Form'

function App() {
  return (
      <div className='min-h-screen bg-teal-600'>
        <div className='container mx-auto bg-gray-300 rounded-3xl'>
          <Logo/>
          <Head/>
          <div className='mt-10 flex'>
            <Form/>
            <List/>
          </div>
        </div>
      </div>
  )
}

export default App
