import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [(Story) => <div style={{ padding: '150px' }}>{Story()}</div>],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
    ],
    defaultValue: 'first',
};

export const topLeft = Template.bind({});
topLeft.args = {
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
    ],
    defaultValue: 'first',
    direction: 'topLeft',
};

export const topRight = Template.bind({});
topRight.args = {
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
    ],
    defaultValue: 'first',
    direction: 'topRight',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
    ],
    defaultValue: 'first',
    direction: 'bottomLeft',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
    ],
    defaultValue: 'first',
    direction: 'bottomRight',
};
