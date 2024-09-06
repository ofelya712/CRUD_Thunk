import './App.css'
import { AddUser } from './features/users/AddUser'
import { UserList } from './features/users/UserList'

function App() {
  

  return (
    <>
    <div style={{display:"flex",gap:80}}>
    <UserList/>
    <AddUser/>
    </div>
    </>
  )
}

export default App
