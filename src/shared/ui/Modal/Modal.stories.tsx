import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Modal from './Modal';

export default {
    title: 'Shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Text fahjf fafa fafa afjfahsfhjsaf afasfaf fasf af fasfashfas',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'Text fahjf fafa fafa afjfahsfhjsaf afasfaf fasf af fasfashfas',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
