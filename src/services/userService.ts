export interface IUser {
  name: string;
  email: string;
}

const db: [IUser] = [
  {
    email: "Joana@dio.me",
    name: "Joana Santos",
  },
];

export class UserService {
  db: IUser[];

  constructor(dababase:IUser[] = db) {
    this.db = dababase;
  }
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log(this.db);
  };

  getAllUsers = () => {
    return this.db;
  };

  deleteUser = (name : string) => {
    const userIndex = this.db.findIndex(user => user.name === name)
  
    if(userIndex !== -1) {
      this.db.splice(userIndex, 1)
    }
    console.log(this.db)
  }
}
