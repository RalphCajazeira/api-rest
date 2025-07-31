import { Request, Response } from "express";

class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Pagina ${page ?? 1} de ${limit ?? 10}`);
  }
  create(request: Request, response: Response) {
    const { name, price } = request.body;

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
