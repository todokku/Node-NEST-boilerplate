"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const errors_1 = require("./../constants/errors");
const files_upload_1 = require("./../constants/files-upload");
function uploadFile({ uploadedFileType, file }) {
    if (files_upload_1.filesUpload[uploadedFileType].mimesType.indexOf(file.mimetype) + 1) {
        if (file.size <= files_upload_1.filesUpload[uploadedFileType].maximumSize) {
            const fileName = `${new Date().getTime()}.${/[a-z\d]+$/i.exec(file.originalname)[0]}`;
            fs_1.writeFileSync(path_1.join('.', 'public', process.env.UPLOADS_PATH, fileName), file.buffer, 'ascii');
            return fileName;
        }
        else {
            throw errors_1.errors.uploadedFileBiggerThanMaximumAllowedFileLimit;
        }
    }
    else {
        throw errors_1.errors.validateOnType[uploadedFileType];
    }
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=upload-file.js.map