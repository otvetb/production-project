import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/AvatarDropdown/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
                avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            },
        },
    }),
];
