import { IUser, UserService } from "./userService";

describe("userService", () => {
  const mockDb: IUser[] = [{name: 'Paulo', email:'Paulo Santos'}]
  const userService = new UserService(mockDb);
  const logSpy = jest.spyOn(global.console, 'log');

  it("Deve adicionar um novo usuário", () => {
    userService.createUser("nath", "nath@dio.me");
    
    expect(logSpy).toHaveBeenCalledWith(mockDb)
  });

  it('Deve remover um usuario', ()=> {
    userService.deleteUser("Paulo")
    expect(logSpy).toHaveBeenCalled()
  })
});
