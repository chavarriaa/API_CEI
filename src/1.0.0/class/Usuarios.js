module.exports = class Usuarios {
    constructor(data){
        this.db = 'Usuarios'
        this.id =data.id;
        this.userName = data.userName;
        this.FirstName = data.FirstName;
        this.LastName = data.LastName;

    this.queryGet = `SELECT * FROM ${this.db}`;
    this.queryGetByID = `SELECT * FROM ${this.db} WHERE id = @id`;
    this.querySave = `INSERT INTO Usuarios (userName, FirstName, Lastname) VALUES (@userName, @FirstName, @LastName)`;
    }
}