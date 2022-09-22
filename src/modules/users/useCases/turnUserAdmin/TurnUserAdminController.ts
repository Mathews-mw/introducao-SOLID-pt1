import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    this.turnUserAdminUseCase.execute(user_id);

    return response.json({ message: "User now have the admin permissions." });
  }
}

export { TurnUserAdminController };
