import { Router } from 'express';
  const endpoints = Router();

  endpoints.post('/contato', async (req, resp) => {
    try {
      let agenda = req.body;
      let r = await inserir(agenda);
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
  })