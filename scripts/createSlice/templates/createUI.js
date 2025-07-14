const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Не удалось создать UI директорию');
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName));
            const componentPath = resolveUIPath(componentName, `${componentName}.tsx`);
            const storiesPath = resolveUIPath(componentName, `${componentName}.stories.tsx`);
            const stylePath = resolveUIPath(componentName, `${componentName}.module.scss`);

            await fs.writeFile(
                componentPath,
                componentTemplate(componentName),
            );
            await fs.readFile(componentPath, { encoding: 'utf-8' })
                .then((data) => {
                    const modifiedData = data.replaceAll('\n', '\r\n');
                    fs.writeFile(componentPath, modifiedData);
                });

            await fs.writeFile(
                storiesPath,
                storyTemplate(layer, componentName),
            );
            await fs.readFile(storiesPath, { encoding: 'utf-8' })
                .then((data) => {
                    const modifiedData = data.replaceAll('\n', '\r\n');
                    fs.writeFile(storiesPath, modifiedData);
                });

            await fs.writeFile(
                stylePath,
                styleTemplate(componentName),
            );
            await fs.readFile(stylePath, { encoding: 'utf-8' })
                .then((data) => {
                    const modifiedData = data.replaceAll('\n', '\r\n');
                    fs.writeFile(stylePath, modifiedData);
                });
        } catch (e) {
            console.log('Не удалось создать компонент');
        }
    };

    await createUIDir();
    await createComponent();
};
