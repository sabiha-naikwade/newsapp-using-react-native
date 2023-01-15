import RNFetchBlob from 'rn-fetch-blob';

export const outputPath = `${RNFetchBlob.fs.dirs.DocumentDir}`;

export const fileToBase64 = async path =>
  RNFetchBlob.fs
    .readFile(path, 'base64')
    .then(response => response)
    .catch(error => console.log(`fileToBase64:error: ${error}`));

export const deleteFile = async uri => await RNFetchBlob.fs.unlink(uri);
