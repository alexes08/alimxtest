"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:mysql-service');
class MysqlService {
    constructor() {
        /*private host = 'localhost';
        private user = 'root';
        private password = 'octubre';
        private datebase = 'testing_ali_fullstack';*/
        this.host = 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com';
        this.user = 'testing';
        this.password = 'Pruebas%ALI%2020';
        this.datebase = 'testing_ali_fullstack';
        log('Creating new instance of MysqlService');
        this.connect();
    }
    getConn() {
        return this.dbConn;
    }
    connect() {
        this.dbConn = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.datebase
        });
        this.dbConn.connect(function (err) {
            if (err)
                throw err;
            console.log("Database Connected!");
        });
    }
}
exports.default = new MysqlService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9teXNxbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFlBQVk7SUFhZDtRQVpIOzs7cURBRzZDO1FBRXJDLFNBQUksR0FBRyxxREFBcUQsQ0FBQztRQUM3RCxTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUM5QixhQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFLcEMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQVE7WUFDakMsSUFBSSxHQUFHO2dCQUFFLE1BQU0sR0FBRyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==