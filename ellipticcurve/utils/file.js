import RNFS from 'react-native-fs';

exports.read = async (path, encoding = 'utf-8') => {
    try {
        const content = await RNFS.readFile(path, encoding);
        return content;
    } catch (error) {
        console.error(error);
    }
};
