let currentArticleId: string;

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit(`articles/${data.id}`);
        });
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecomendationsList').should('exist');
    });
    it('И ставит оценку статье', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected]').should('have.length', 5);
    });
});
