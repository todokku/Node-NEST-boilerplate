import { BaseDtoClass } from './../../../../../shared/base/dto/base-dto.class';
import { UserRoles } from './../enum/roles.enums';
export declare class CreateUserDto extends BaseDtoClass {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    roles: UserRoles[];
}
