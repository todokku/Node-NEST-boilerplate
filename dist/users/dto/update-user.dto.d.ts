import { UserRoles } from './../enum/roles.enums';
import { BaseUpdateClass } from '../../shared/base/dto/base-update-class';
export declare class UpdateUserDto extends BaseUpdateClass {
    name: string;
    email: string;
    roles: [UserRoles];
}
