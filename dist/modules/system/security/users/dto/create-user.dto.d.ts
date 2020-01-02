import { BaseCreateClass } from './../../../../../shared/base/dto/base-create-class';
import { UserRoles } from './../enum/roles.enums';
export declare class CreateUserDto extends BaseCreateClass {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    roles: UserRoles[];
}
