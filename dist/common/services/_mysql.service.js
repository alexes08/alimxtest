'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'octubre',
    database: 'testing_ali_fullstack'
});
dbConn.connect(function (err) {
    if (err)
        throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX215c3FsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vc2VydmljZXMvX215c3FsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLDJCQUEyQjtBQUMzQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDbEMsSUFBSSxFQUFPLFdBQVc7SUFDdEIsSUFBSSxFQUFPLE1BQU07SUFDakIsUUFBUSxFQUFHLFNBQVM7SUFDcEIsUUFBUSxFQUFHLHVCQUF1QjtDQUNyQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBTztJQUMzQixJQUFJLEdBQUc7UUFBRSxNQUFNLEdBQUcsQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyJ9