import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [(Story) => <div style={{ padding: '150px' }}>{Story()}</div>],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    trigger: <Button>Open</Button>,
    direction: 'topLeft',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    trigger: <Button>Open</Button>,
    direction: 'topRight',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    trigger: <Button>Open</Button>,
    direction: 'bottomLeft',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    trigger: <Button>Open</Button>,
    direction: 'bottomRight',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
