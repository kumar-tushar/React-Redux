import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {

    const counter=useSelector(state=>state.counter)
    const show=useSelector(state=>state.showCounter)
    const dispatch=useDispatch()

    const incrementHandler=()=>{
        dispatch({type:'increment'})
    }

    const increaseHandler=()=>{
        dispatch({type:'increase', amount: 10})
    }

    const decrementHandler=()=>{
        dispatch({type:'decrement'})
    }

    const toggleCounterHandler=()=>{
        dispatch({type: 'toggle'})

    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show &&
                <div>
                <div className={classes.value}>{counter}</div>
                <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
                </div>
                </div>
            }
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter
