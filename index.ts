import express, { Express, Request, Response } from 'express';
import { Database } from './src/db'
import ControllerInterfaceApi from './src/controller/interface-api';
import ControllerProduto from './src/controller/produto';
import ControllerPessoa from './src/controller/pessoa';
import ControllerServico from './src/controller/servico';
import ControllerContasReceber from './src/controller/contas-receber';
import ControllerContasReceberPagtos from './src/controller/contas-receber-pagtos';
import ControllerAvaliacao from './src/controller/avaliacao';
import ControllerAvaliacaoQuestao from './src/controller/avaliacao-questao';
import ControllerAvaliacaoResposta from './src/controller/avaliacao-resposta';
import ControllerEventoAcesso from './src/controller/evento-acesso';

const api = <Express>express()

const cors = require('cors');

api.use(cors());

api.listen(4200, () => {
  console.log('Api listening on port 4200!')
})

api.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Mtr Academia Api!')
})

api.get('/pessoa', (req: Request, res: Response) => {
  getAll(req, res, <ControllerPessoa>new ControllerPessoa())
})

api.get('/servico', (req: Request, res: Response) => {
  getAll(req, res, <ControllerServico>new ControllerServico())
})

api.get('/produto', (req: Request, res: Response) => {
  getAll(req, res, <ControllerProduto>new ControllerProduto())
})

api.get('/contas-receber', (req: Request, res: Response) => {
  getAll(req, res, <ControllerContasReceber>new ControllerContasReceber())
})

api.get('/contas-receber-pagtos', (req: Request, res: Response) => {
  getAll(req, res, <ControllerContasReceberPagtos>new ControllerContasReceberPagtos())
})

api.get('/avaliacao', (req: Request, res: Response) => {
  getAll(req, res, <ControllerAvaliacao>new ControllerAvaliacao())
})

api.get('/avaliacao-questao', (req: Request, res: Response) => {
  getAll(req, res, <ControllerAvaliacaoQuestao>new ControllerAvaliacaoQuestao())
})

api.get('/avaliacao-resposta', (req: Request, res: Response) => {
  getAll(req, res, <ControllerAvaliacaoResposta>new ControllerAvaliacaoResposta())
})

api.get('/evento-acesso', (req: Request, res: Response) => {
  getAll(req, res, <ControllerEventoAcesso>new ControllerEventoAcesso())
})

function getAll(req: Request, res: Response, Controller: ControllerInterfaceApi) {
  const database = <Database>new Database()

  database.connect()
    .then(() => {
      Controller.getAll(req).then((result) => {
        res.json(result)
      })
    })
    .catch((err) => {
      res.send('Unable to close to the database: ' + err)
    });
}