const mysql = require('mysql');
import debug from 'debug';

const log: debug.IDebugger = debug('app:mysql-service');

class MysqlService {
	/*private host = 'localhost';
	private user = 'root';
	private password = 'octubre';
	private datebase = 'testing_ali_fullstack';*/

	private host = 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com';
	private user = 'testing';
	private password = 'Pruebas%ALI%2020';
	private datebase = 'testing_ali_fullstack';

	dbConn:any;

    constructor() {
        log('Creating new instance of MysqlService');
        this.connect();
    }

    getConn(){
    	return this.dbConn;
    }

    connect() {
    	this.dbConn = mysql.createConnection({
		    host: this.host,
		    user: this.user,
		    password: this.password,
		    database: this.datebase
		});

		this.dbConn.connect(function(err: any) {
		    if (err) throw err;
		    console.log("Database Connected!");
		});
    }
}

export default new MysqlService();