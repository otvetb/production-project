const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
    const componentName = firstCharUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;
    const filePath = resolveRoot('src', layer, sliceName, 'index.ts');

    try {
        await fs.writeFile(
            filePath,
            `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';
`,
        );
        await fs.readFile(filePath, { encoding: 'utf-8' })
            .then((data) => {
                const modifiedData = data.replaceAll('\n', '\r\n');
                fs.writeFile(filePath, modifiedData);
            });
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
};
