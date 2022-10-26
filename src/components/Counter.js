import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler=()=>{
        dispatch(counterActions.increment());
    }

    const increaseHandler=()=>{
        dispatch(counterActions.increase(10));
    }

    const decrementHandler=()=>{
        dispatch(counterActions.decrement());
    }

    const toggleCounterHandler=()=>{
        dispatch(counterActions.toggleCounter());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && (
                <div>
                    <div className={classes.value}>{counter}</div>
                    <div>
                        <button onClick={incrementHandler}>Increment</button>
                        <button onClick={increaseHandler}>Increase by 10</button>
                        <button onClick={decrementHandler}>Decrement</button>
                    </div>
                </div>
            )}
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter