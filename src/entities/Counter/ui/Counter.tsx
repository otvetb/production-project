import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectores/getCounterValue/getCounterValue';

export const Counter = () => {
    const { increment, decrement } = useCounterActions();
    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };
    const counterValue = useCounterValue();
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                +
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                -
            </Button>
        </div>
    );
};
