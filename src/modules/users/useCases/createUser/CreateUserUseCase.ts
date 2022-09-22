import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userEmailAlredyExist = this.usersRepository.findByEmail(email);

    if (userEmailAlredyExist) {
      throw Error("User e-mail alredy exist!");
    }

    this.usersRepository.create({ name, email });

    return null;
  }
}

export { CreateUserUseCase };
