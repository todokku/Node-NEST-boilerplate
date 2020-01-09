import { BaseDtoClass } from './../../../../../shared/base/dto/base-dto.class';
import { UserRoles } from './../enum/roles.enums';
export declare class UpdateUserDto extends BaseDtoClass {
    name: string;
    email: string;
    roles: UserRoles[];
}
