import { Router } from 'express';
import {GetAllinsights,CreateInsight, DeleteInsight, UpdateInsight} from '../controller/insightsController.js'

const router=Router()

router.get('/insights',GetAllinsights)
router.post('/insights',CreateInsight)
router.delete('/insights/:id',DeleteInsight)
router.patch('/insights/:id',UpdateInsight)

export default router