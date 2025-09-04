import { Story } from '@storybook/react';
// TODO
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line otvetb-plugin/check-public-api
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line otvetb-plugin/check-public-api
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';
// eslint-disable-next-line otvetb-plugin/check-public-api
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line otvetb-plugin/check-public-api
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
// eslint-disable-next-line otvetb-plugin/check-public-api
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
