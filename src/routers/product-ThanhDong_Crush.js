import express from 'express';
import { addPro, allPro, deletePro, onePro, updatePro } from '../controllers/product';

const router = express.Router()

router.post("/products", addPro);
router.get("/products", allPro);
router.get("/products/:id", onePro);
router.patch("/products/:id", updatePro);
router.delete("/products/:id", deletePro);

export default router;