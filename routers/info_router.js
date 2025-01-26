const express = require("express");
const InfoController = require("../controllers/info_controller");
const InfoMiddlewares = require("../middlewares/info_middleware");
info_router = express.Router();

//! GET SORGUSU
info_router.get("/", InfoController.GET);

//! POST SORGUSU 
info_router.post("/", InfoMiddlewares, InfoController.POST);

//!DELETE SORGUSU;
info_router.delete("/:id", InfoController.DELETE);

module.exports = info_router;