import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('button', () => {
    test('default test', () => {
        render(<Button>TEXT</Button>);
        expect(screen.getByText('TEXT')).toBeInTheDocument();
    });

    test('clear button', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>);
        expect(screen.getByText('TEXT')).toHaveClass('clear');
        screen.debug();
    });
});
