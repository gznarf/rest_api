import { Router } from 'express';
import { persona } from './controller.js';
import { libro } from './controller.js';



export const router = Router()

router.get('/personas', persona.getAll);
router.post('/persona', persona.add);
router.delete('/persona', persona.delete);
router.put('/persona', persona.update);

router.get('/libro', libro.getAll);
router.get('/libro/:id', libro.getOne);
router.post('/libro', libro.add);
router.delete('/libro', libro.delete);
router.put('/libro', libro.update);