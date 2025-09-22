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
    it.skip('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it.skip('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecomendationsList').should('exist');
    });
    it.skip('И комментирует статью', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('feedback');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку статье', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected]').should('have.length', 5);
    });
});

export {};
