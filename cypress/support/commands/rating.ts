export const setRate = (starsCount: number, text?: string) => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    if (text) {
        cy.getByTestId('RatingCard.Input').type(text);
    }
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(rate: number, text?: string): Chainable<void>;
        }
    }
}
