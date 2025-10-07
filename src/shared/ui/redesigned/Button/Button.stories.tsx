import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    variant: 'outline',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    square: true,
    size: 'l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    square: true,
    size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    disabled: true,
};
