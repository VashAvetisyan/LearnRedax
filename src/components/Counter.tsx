import { useDispatch, useSelector } from "react-redux"
import { AppDispacth, RootState } from "../state/store"
import { decrement, increment, incrementByAmount, incrementAsyns } from "../state/counter/counterSlice"

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispacth>()
    return (
        <div>
            <h2>
                {count}
            </h2>
            <div>
                <button onClick={() => dispatch(incrementAsyns(10))}>Incrmenet</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
            </div>
        </div>
    )
}

export default Counter