import './App.css'
import DetailsBar from './components/DetailsBar/DetailsBar'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='h-screen'>
      <div className='bg-slate-200 absolute left-0 -bottom-16 h-1/2 w-full -z-10'></div>
      <div className="flex">
        <Sidebar />
        <Main />
        <DetailsBar />

      </div>
    </div>
  )
}

export default App
