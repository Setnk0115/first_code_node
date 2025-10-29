import express from "express";

const route = express.Router();

route.get("/", (req , res) => {
    res.send({
        type:"get product",
        status:200,
        message:"OK"

    });
});
route.put("/", (req , res) => {
    res.send({
        type:"put",
        status:200,
        message:"update productos"

    });
});
route.delete("/", (req , res) => {
    res.send({
        type:"delete",
        status:200,
        message:"Elimina un producto"

    });
});
route.patch("/", (req , res) => {
    res.send({
        type:"patch",
        status:200,
        message:"update de un producto"

    });
});
route.post("/", (req , res) => {
    res.send({
        type:"post",
        status:200,
        message:"no se"

    });
});

export default route;