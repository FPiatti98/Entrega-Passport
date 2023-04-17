import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
    res.render("login")
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/current", async(req, res) => {
    const user = req.session.user
    res.render("profile", {user : user})
})

export default router;