import { UserService } from "../services/userService";
import { UserController } from "./UserController";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from "express";



describe("userControler", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    deleteUser: jest.fn()
  };
  const userControler = new UserController(mockUserService as UserService);
  const mockResponse = makeMockResponse()

  it("Deve adicionar um novo usuário", () => {
    const mockRequest = {body: {
      name: 'Paulo',
      email: 'paulo@dio.me'
    }} as Request
    userControler.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({ message: "Create User"})
  });
  
  it("Deve retornar uma mensagem de erro pelo nome não informado", () => {
    const mockRequest = {body: {
      name: '',
      email: 'paulo@dio.me'
    }} as Request
    userControler.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400)
    expect(mockResponse.state.json).toMatchObject({  message: "Bad request: name required"})
  });
  it("Deve retornar uma mensagem de erro pelo email não informado", () => {
    const mockRequest = {body: {
      name: 'Paulo',
      email: ''
    }} as Request
    userControler.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400)
    expect(mockResponse.state.json).toMatchObject({  message: "Bad request: email required"})
  });

  it("Deve verificar se a função getAllUser retorna o status correto", () => {
    const mockRequest = {body: {}} as Request

    userControler.getAllUsers(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
  })
  it("Deve deletar um usuario", () => {
    const mockRequest = {body: {name: 'Paulo'}} as Request

    userControler.deleteUserByName(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toMatchObject({message : 'User delete'})
  })
});
