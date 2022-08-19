import express from "express";
import {
    deleteUser,
    getUser,
    updateUser,
    getUsers
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// Verify Token authenticity
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You logged in successfully!")
// })

// Verify User
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are authorized to delete this account!")
// })

//verify Admin Status
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, You are authorized to delete all accounts and bear the properly weighed consequences!")
// })
// UPDATE

router.put("/:id", verifyUser, updateUser);

// DELETE

router.delete("/:id", verifyUser, deleteUser);

// GET

router.get("/:id", verifyUser, getUser);

// GET ALL

router.get("/", verifyAdmin, getUsers);







export default router;