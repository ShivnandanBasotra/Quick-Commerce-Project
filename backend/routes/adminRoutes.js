import { Router } from "express";
import adminProtectRoute from "../middlewares/adminProtectRoute.js";
import { addProduct } from "../controllers/admin/productController.js";

const router = Router();

router.post('/add-product',adminProtectRoute,addProduct);

export default router;