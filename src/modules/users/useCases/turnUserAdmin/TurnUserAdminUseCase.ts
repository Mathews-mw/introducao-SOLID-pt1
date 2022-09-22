import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw Error("There's no user to turn into admin");
    }

    this.usersRepository.turnAdmin(user);

    return null;
  }
}

export { TurnUserAdminUseCase };
