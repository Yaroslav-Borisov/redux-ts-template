import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'
import { PostContainer } from './components/PostContainer'

function App() {
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className='App'>
      {isLoading && <h3>Идёт загрузка...</h3>}
      {error && <h3>{error}</h3>}
      {users.map(u => <h3 key={u.id}>Name: {u.name}</h3>)}

      <PostContainer />
    </div>
  )
}

export default App
