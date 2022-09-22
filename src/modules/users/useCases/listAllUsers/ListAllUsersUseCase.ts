import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User[] {
    const users = this.usersRepository.list();

    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error(
        "If there's no existing user, so there's no list to show up"
      );
    }

    if (user.admin === false) {
      throw new Error(
        "User hasn't the right credentials to access the list of all users"
      );
    }

    return users;
  }
}

export { ListAllUsersUseCase };
