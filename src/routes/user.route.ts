import { Router } from "express";

export const router = Router();

import {
  addUserHandler,
  deleteUserHandler,
  getUserById,
  getUsers,
  updateUserHandler,
} from "../controllers/user.controller";

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUserHandler);
router.delete("/:id", deleteUserHandler);
router.patch("/:id", updateUserHandler);
