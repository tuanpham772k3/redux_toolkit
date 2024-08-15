import './App.css'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Count/CounterSlice'
import { useAppSelector } from './Redux/hook'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}

export default App
