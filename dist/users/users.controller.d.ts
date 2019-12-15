import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createdUserDto: CreateUserDto): Promise<any>;
    findAll(): any;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<void>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
}
