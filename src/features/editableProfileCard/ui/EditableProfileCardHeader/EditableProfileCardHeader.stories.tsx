import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfilePageHeader } from './EditableProfilePageHeader';

export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfilePageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfilePageHeader>;

const Template: ComponentStory<typeof EditableProfilePageHeader> = (args) => (
    <EditableProfilePageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
