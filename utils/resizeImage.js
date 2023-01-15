import ImageResizer from 'react-native-image-resizer';
import {outputPath, fileToBase64} from './rnFetchBlob';

export const resizeImage = async uri =>
  ImageResizer.createResizedImage(uri, 1080, 1920, 'JPEG', 100, 0, outputPath)
    .then(resizedImage => fileToBase64(resizedImage.path))
    .catch(error => console.log(`createResizedImage:error: ${error}`));
