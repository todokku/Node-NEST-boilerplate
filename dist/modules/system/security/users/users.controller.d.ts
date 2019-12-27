import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createdUserDto: CreateUserDto): Promise<import("./classes/user").User>;
    findAll(): Promise<import("./classes/user").User[]>;
    getById(id: string): Promise<import("./classes/user").User>;
    delete(id: string): Promise<import("./classes/user").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./classes/user").User>;
}
