import UsersDao from '../daos/users.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateUserDto } from '../dto/create.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';

import debug from 'debug';

const log: debug.IDebugger = debug('app:users-service');

class UsersService implements CRUD {
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: number) {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    }

    async patchById(id: number, resource: PatchUserDto) {
        return UsersDao.patchUserById(id, resource);
    }

    async readById(id: number) {
        log("service");
        log(UsersDao.getUserById(id));
        return UsersDao.getUserById(id);
    }

    async putById(id: number, resource: PutUserDto) {
        //return UsersDao.putUserById(id, resource);
        return 0;
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();