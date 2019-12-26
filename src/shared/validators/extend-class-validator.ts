import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function ValidArrayValues(
  values: string[],
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'validArrayValues',
      target: object.constructor,
      propertyName,
      constraints: [values],
      options: validationOptions,
      validator: {
        validate(propertyValues: any, args: ValidationArguments) {
          let valid = true;
          for (const value of propertyValues) {
            if (values.indexOf(value) === -1) {
              valid = false;
              break;
            }
          }
          return valid;
        },
        defaultMessage(args: ValidationArguments) {
          return `Array valid values is ${values} only!`;
        },
      },
    });
  };
}
