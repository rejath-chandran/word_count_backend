import { Router } from 'express';
import {GetAllinsights,CreateInsight, DeleteInsight, UpdateInsight} from '../controller/insightsController.js'

const router=Router()

router.get('/insights/:id',GetAllinsights)
router.post('/insights',CreateInsight)

router.delete('/insights',DeleteInsight)
router.patch('/insights',UpdateInsight)

export default router