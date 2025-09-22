import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import cls from './CountrySelectSorybook.module.scss';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect className={cls.marginForStorybook} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
