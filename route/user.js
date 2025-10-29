import express from "express";

const route = express.Router();

route.get("/", (req , res) => {
    res.send({
        type:"get user",
        status:200,
        message:"OK"

    });
});

export default route;