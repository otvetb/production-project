import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectores/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const counterValue = useSelector(getCounterValue);
    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                +
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                -
            </Button>
        </div>
    );
};
