import express from 'express';
import dadosController from '../controller/dadosController.js'

const router = express.Router();
const ctrl = new dadosController();

// Cadastra todas as informações
router.post('/cadastrar', (req, res) => { ctrl.regisrarDados(req, res) })

export default router;