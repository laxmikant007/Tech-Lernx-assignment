import './App.css'
import Navbar from './components/nabvar'
import SideBar from './components/sidebar'
import Profile from './components/profile'

function App() {
  return (
    <>
      <Navbar />
      <div
        className='flex flex-row'
      >
        <div
          className='w-1/5 p-3 hidden md:block'
        >
          <SideBar />
        </div>
        <div className='w-4/5'>
          <Profile />
        </div>
      </div>

    </>
  )
}

export default App
