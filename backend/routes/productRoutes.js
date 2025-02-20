import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route("/").get(getProducts);

// @desc    Fetch top rated products
// @route   GET /api/products/top
// @access  Public
router.route("/top").get(getTopProducts);

// @desc    Fetch a product
// @route   GET /api/products/:id
// @access  Public
router.route("/:id").get(getProductById);

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
router.route("/").post(protect, admin, createProduct);

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
router.route("/:id").put(protect, admin, updateProduct);

// @desc    DELETE a product
// @route   PUT /api/products/:id
// @access  Private/Admin
router.route("/:id").delete(protect, admin, deleteProduct);

// @desc    Update a product
// @route   POST /api/products/:id
// @access  Private
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
