import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
    gap: '4',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
    gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
    gap: '16',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
    gap: '32',
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
    direction: 'column',
    gap: '16',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    children: (
        <>
            <div>af1</div>
            <div>2adfs</div>
            <div>3afasfs</div>
        </>
    ),
    direction: 'column',
    align: 'end',
};
