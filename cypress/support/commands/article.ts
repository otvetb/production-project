import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TEST ARTICLE',
    subtitle: 'Что нового в JS за 2022 год?',
    img:
        'https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/' +
        'article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSL' +
        'gut3A_4PwE6YFe9EK3iy17L2Y',
    views: 1022,
    createdAt: '26.04.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: {
                Authorization: '123',
            },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: '123',
        },
        body: {},
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
