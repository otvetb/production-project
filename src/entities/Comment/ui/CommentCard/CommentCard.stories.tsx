import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const nomalArgs = {
    comment: {
        id: '1',
        text: 'text',
        user: { id: '1', username: 'username' },
    },
};

export const Normal = Template.bind({});
Normal.args = nomalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = nomalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'text',
        user: { id: '1', username: 'username' },
    },
    isLoading: true,
};
