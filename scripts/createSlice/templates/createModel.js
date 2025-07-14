const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath('types'));
            await fs.mkdir(resolveModelPath('slices'));
            await fs.mkdir(resolveModelPath('selectors'));
            await fs.mkdir(resolveModelPath('services'));
        } catch (e) {
            console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e);
        }
    };

    const createReduxSlice = async () => {
        const filePath = resolveModelPath('slices', `${sliceName}Slice.ts`);
        try {
            await fs.writeFile(
                filePath,
                reduxSliceTemplate(sliceName),
            );
            await fs.readFile(filePath, { encoding: 'utf-8' })
                .then((data) => {
                    const modifiedData = data.replaceAll('\n', '\r\n');
                    fs.writeFile(filePath, modifiedData);
                });
        } catch (e) {
            console.log('Не удалось создать редакс слайс', e);
        }
    };

    const createSchemaType = async () => {
        const filePath = resolveModelPath('types', `${sliceName}Schema.ts`);
        try {
            await fs.writeFile(
                resolveModelPath('types', `${sliceName}Schema.ts`),
                schemaTypeTemplate(sliceName),
            );
            await fs.readFile(filePath, { encoding: 'utf-8' })
                .then((data) => {
                    const modifiedData = data.replaceAll('\n', '\r\n');
                    fs.writeFile(filePath, modifiedData);
                });
        } catch (e) {
            console.log('Не удалось создать тип схемы стейта', e);
        }
    };

    await createModelStructure();
    await createReduxSlice();
    await createSchemaType();
};
