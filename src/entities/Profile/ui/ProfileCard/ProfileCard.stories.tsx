import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        city: 'Moscow',
        currency: Currency.RUB,
        firstname: 'Ivan',
        lastname: 'Petrov',
        avatar: 'https://avatars.githubusercontent.com/u/5502029?v=4',
    },
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: 'f',
};
