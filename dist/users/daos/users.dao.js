"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_service_1 = __importDefault(require("../../common/services/mysql.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class UsersDao {
    //users: Array<CreateUserDto> = [];
    constructor() {
        log('Created new instance of UsersDao');
    }
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            // aqui debemos poner el metod para crear un nuevo usuario pero con mysql
            return new Promise(resolve => {
                mysql_service_1.default.getConn().query("INSERT INTO users_test_alejandro_diaz set ?", userFields, function (err, res) {
                    if (err) {
                        log("error: ", err);
                        resolve(-1);
                    }
                    else {
                        log(res.insertId);
                        resolve(res.insertId);
                    }
                });
            });
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                mysql_service_1.default.getConn().query("SELECT * FROM users_test_alejandro_diaz ", function (err, res) {
                    if (err) {
                        log("error: ", err);
                        resolve(err);
                    }
                    else {
                        if (res.length > 0) {
                            resolve(res);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                mysql_service_1.default.getConn().query("SELECT * FROM users_test_alejandro_diaz WHERE id = ? ", userId, function (err, res) {
                    if (err) {
                        log("error: ", err);
                        resolve(err);
                    }
                    else {
                        if (res.length > 0) {
                            resolve(res);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () { return 0; });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                mysql_service_1.default.getConn().query("UPDATE users_test_alejandro_diaz SET email=?, nombre=?, segundoNombre=?, apellidoPaterno=?, apellidoMaterno=?, fechaNacimiento=?, telefono=? WHERE id = ?", [user.email, user.nombre, user.segundoNombre, user.apellidoPaterno, user.apellidoMaterno, user.fechaNacimiento, user.telefono, userId], function (err, res) {
                    if (err) {
                        log("error: ", err);
                        resolve(-1);
                    }
                    else {
                        log(res);
                        resolve(res);
                    }
                });
            });
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                mysql_service_1.default.getConn().query("DELETE FROM users_test_alejandro_diaz WHERE id = ?", userId, function (err, res) {
                    if (err) {
                        log("error: ", err);
                        resolve(null);
                    }
                    else {
                        log(res);
                        resolve("Registro borrado correctamente");
                    }
                });
            });
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                mysql_service_1.default.getConn().query("SELECT * FROM users_test_alejandro_diaz WHERE email = ? ", email, function (err, res) {
                    if (err) {
                        log("error: ", err);
                        resolve(null);
                    }
                    else {
                        log(res);
                        if (res.length > 0) {
                            resolve(res);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBK0Q7QUFNL0Qsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sUUFBUTtJQUNWLG1DQUFtQztJQUVuQztRQUNJLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFSyxPQUFPLENBQUMsVUFBeUI7O1lBQ3RDLHlFQUF5RTtZQUN6RSxPQUFPLElBQUksT0FBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUM3Qix1QkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsRUFBQyxVQUFVLEVBQUUsVUFBUyxHQUFPLEVBQUUsR0FBTztvQkFDL0csSUFBRyxHQUFHLEVBQUU7d0JBQ1QsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDdkI7Z0JBQ0MsQ0FBQyxDQUFDLENBQUE7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7S0FBQTtJQUVLLFFBQVE7O1lBQ2IsT0FBTyxJQUFJLE9BQU8sQ0FBRSxPQUFPLENBQUMsRUFBRTtnQkFDN0IsdUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLEVBQUUsVUFBVSxHQUFPLEVBQUUsR0FBTztvQkFDbEcsSUFBRyxHQUFHLEVBQUU7d0JBQ1QsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNkO3lCQUFNO3dCQUNOLElBQUcsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7NEJBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNiOzZCQUFNOzRCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZDtxQkFDRDtnQkFDQyxDQUFDLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWM7O1lBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLHVCQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEdBQU8sRUFBRSxHQUFPO29CQUN2SCxJQUFHLEdBQUcsRUFBRTt3QkFDVCxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Q7eUJBQU07d0JBQ0osSUFBRyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQzs0QkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNiOzZCQUFNOzRCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZDtxQkFDRDtnQkFDQyxDQUFDLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRVEsV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFnQjs4REFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBQTtJQUUzRCxhQUFhLENBQUMsTUFBYyxFQUFFLElBQWtCOztZQUNyRCxPQUFPLElBQUksT0FBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUM3Qix1QkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQywySkFBMkosRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsVUFBUyxHQUFPLEVBQUUsR0FBTztvQkFDelYsSUFBRyxHQUFHLEVBQUU7d0JBQ1QsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDZDtnQkFDQyxDQUFDLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLE1BQWM7O1lBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLHVCQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEdBQU8sRUFBRSxHQUFPO29CQUNwSCxJQUFHLEdBQUcsRUFBRTt3QkFDVCxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ04sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNULE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO3FCQUMxQztnQkFDQyxDQUFDLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEtBQWE7O1lBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLHVCQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxFQUFFLEtBQUssRUFBRSxVQUFVLEdBQU8sRUFBRSxHQUFPO29CQUN6SCxJQUFHLEdBQUcsRUFBRTt3QkFDVCxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ04sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNULElBQUcsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7NEJBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNiOzZCQUFNOzRCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZDtxQkFDRDtnQkFDQyxDQUFDLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUFBO0NBd0VKO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9