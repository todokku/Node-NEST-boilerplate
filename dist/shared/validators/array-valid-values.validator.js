"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function ValidArrayValues(values, validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'validArrayValues',
            target: object.constructor,
            propertyName,
            constraints: [values],
            options: validationOptions,
            validator: {
                validate(propertyValues) {
                    let valid = true;
                    for (const value of propertyValues) {
                        if (values.indexOf(value) === -1) {
                            valid = false;
                            break;
                        }
                    }
                    return valid;
                },
                defaultMessage() {
                    return `Array valid values is ${values} only!`;
                },
            },
        });
    };
}
exports.ValidArrayValues = ValidArrayValues;
//# sourceMappingURL=array-valid-values.validator.js.map