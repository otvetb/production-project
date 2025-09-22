import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Открытие страницы профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Открытие несуществующего маршрута', () => {
            cy.visit('/dffadsfasdfasfasfasafsd');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Открытие страницы профиля', () => {
            cy.visit('/profile/4');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Открытие страницы статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
