import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

export default {
    title: 'Shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};
