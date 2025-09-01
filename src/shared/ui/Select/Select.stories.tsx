import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import { Select } from './Select';

export default {
    title: 'Shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '123', content: 'Первый' },
        { value: '1243', content: 'Второй' },
    ],
    value: '1243',
};
