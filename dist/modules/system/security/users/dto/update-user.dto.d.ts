import { BaseUpdateClass } from './../../../../../shared/base/dto/base-update-class';
import { UserRoles } from './../enum/roles.enums';
export declare class UpdateUserDto extends BaseUpdateClass {
    name: string;
    email: string;
    roles: UserRoles[];
}
