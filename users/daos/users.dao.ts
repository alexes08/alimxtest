import mysqlService from '../../common/services/mysql.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';

import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    //users: Array<CreateUserDto> = [];

    constructor() {
        log('Created new instance of UsersDao');
    }

    async addUser(userFields: CreateUserDto) {
    	// aqui debemos poner el metod para crear un nuevo usuario pero con mysql
    	return new Promise( resolve => {
    		mysqlService.getConn().query("INSERT INTO users_test_alejandro_diaz set ?",userFields, function(err:any, res:any){
	    		if(err) {
				  log("error: ", err);
				  resolve(-1);
				} else {
				  log(res.insertId);
				  resolve(res.insertId);
				}
	    	})
    	});
    }

    async getUsers(){
    	return new Promise( resolve => {
    		mysqlService.getConn().query("SELECT * FROM users_test_alejandro_diaz ", function (err:any, res:any) {
	    		if(err) {
				  log("error: ", err);
				  resolve(err);
				} else {
					if(res.length>0){
						resolve(res);
					} else {
						resolve(null);
					}
				}
	    	})
    	});
    }

    async getUserById(userId: number) {
	    return new Promise( resolve => {
    		mysqlService.getConn().query("SELECT * FROM users_test_alejandro_diaz WHERE id = ? ", userId, function (err:any, res:any) {
	    		if(err) {
				  log("error: ", err);
				  resolve(err);
				} else {
				  	if(res.length>0){
						resolve(res);
					} else {
						resolve(null);
					}
				}
	    	})
    	});
	}

    async putUserById(userId: number, user: PutUserDto) { return 0; }

    async patchUserById(userId: number, user: PatchUserDto) { 
    	return new Promise( resolve => {
    		mysqlService.getConn().query("UPDATE users_test_alejandro_diaz SET email=?, nombre=?, segundoNombre=?, apellidoPaterno=?, apellidoMaterno=?, fechaNacimiento=?, telefono=? WHERE id = ?", [user.email,user.nombre, user.segundoNombre, user.apellidoPaterno, user.apellidoMaterno, user.fechaNacimiento, user.telefono, userId], function(err:any, res:any){
	    		if(err) {
				  log("error: ", err);
				  resolve(-1);
				} else {
				  log(res);
				  resolve(res);
				}
	    	})
    	});
    }

    async removeUserById(userId: number) {
    	return new Promise( resolve => {
    		mysqlService.getConn().query("DELETE FROM users_test_alejandro_diaz WHERE id = ?", userId, function (err:any, res:any) {
	    		if(err) {
				  log("error: ", err);
				  resolve(null);
				} else {
					log(res);
					resolve("Registro borrado correctamente");
				}
	    	})
    	});
    }

    async getUserByEmail(email: string) {
    	return new Promise( resolve => {
    		mysqlService.getConn().query("SELECT * FROM users_test_alejandro_diaz WHERE email = ? ", email, function (err:any, res:any) {
	    		if(err) {
				  log("error: ", err);
				  resolve(null);
				} else {
					log(res);
					if(res.length>0){
						resolve(res);
					} else {
						resolve(null);
					}
				}
	    	})
    	});
    }


    /*async addUser(user: CreateUserDto) {
	    user.id = shortid.generate();
	    this.users.push(user);
	    return user.id;
	}

	async getUsers() {
	    return this.users;
	}

	async getUserById(userId: string) {
	    return this.users.find((user: { id: string }) => user.id === userId);
	}

	async putUserById(userId: string, user: PutUserDto) {
	    const objIndex = this.users.findIndex(
	        (obj: { id: string }) => obj.id === userId
	    );
	    this.users.splice(objIndex, 1, user);
	    return `${user.id} updated via put`;
	}

	async patchUserById(userId: string, user: PatchUserDto) {
	    const objIndex = this.users.findIndex(
	        (obj: { id: string }) => obj.id === userId
	    );
	    let currentUser = this.users[objIndex];
	    const allowedPatchFields = [
	        'password',
	        'firstName',
	        'lastName',
	        'permissionLevel',
		    'email',
		    'nombre',
		    'segundoNombre',
		    'apellidoPaterno',
		    'apellidoMaterno',
		    'fechaNacimiento',
		  	'telefono'
	    ];
	    for (let field of allowedPatchFields) {
	        if (field in user) {
	            // @ts-ignore
	            currentUser[field] = user[field];
	        }
	    }
	    this.users.splice(objIndex, 1, currentUser);
	    return `${user.id} patched`;
	}

	async removeUserById(userId: string) {
	    const objIndex = this.users.findIndex(
	        (obj: { id: string }) => obj.id === userId
	    );
	    this.users.splice(objIndex, 1);
	    return `${userId} removed`;
	}

	async getUserByEmail(email: string) {
	    const objIndex = this.users.findIndex(
	        (obj: { email: string }) => obj.email === email
	    );
	    let currentUser = this.users[objIndex];
	    if (currentUser) {
	        return currentUser;
	    } else {
	        return null;
	    }
	}*/
}

export default new UsersDao();