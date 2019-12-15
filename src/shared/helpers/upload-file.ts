import { join } from 'path';
import { writeFileSync } from 'fs';
import { errors } from './../constants/errors';
import { filesUpload } from './../constants/files-upload';

export function uploadFile({ uploadedFileType, file }) {
  // validate on mime-type
  if (filesUpload[uploadedFileType].mimesType.indexOf(file.mimetype) + 1) {
    // validate on file size
    if (file.size <= filesUpload[uploadedFileType].maximumSize) {
      // concat unique 'number' with uploaded 'file-type'
      const fileName = `${new Date().getTime()}.${
        /[a-z\d]+$/i.exec(file.originalname)[0]
      }`;

      // Save file
      writeFileSync(
        join('.', 'public', process.env.UPLOADS_PATH, fileName),
        file.buffer,
        'ascii',
      );

      // inject file name
      return fileName;
    } else {
      throw errors.uploadedFileBiggerThanMaximumAllowedFileLimit;
    }
  } else {
    throw errors.validateOnType[uploadedFileType];
  }
}
