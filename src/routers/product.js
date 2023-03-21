import express from 'express';
import { addPro, allPro, deletePro, onePro, updatePro } from '../controllers/product';

const router = express.Router()

router.post("/products", addPro);
router.post("/products", allPro);
router.post("/products/:id", onePro);
router.post("/products/:id", updatePro);
router.post("/products/:id", deletePro);

export default router;