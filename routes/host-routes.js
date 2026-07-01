//User Router Extracted From App.js(External Module)
const express = require('express');
const HostRouter = express.Router();

// Local Module
const { getAddHome, postAddHome, getHostManageHomes, getEditHome, postEditHome, postDeleteHome } = require("../controllers/Host");

HostRouter.get("/add-home", getAddHome);
HostRouter.post("/add-home", postAddHome);
HostRouter.get("/host-home-list", getHostManageHomes);
HostRouter.get("/edit-home/:homeId", getEditHome);
HostRouter.post("/edit-home", postEditHome);
HostRouter.post("/delete-home", postDeleteHome);


exports.HostRouter = HostRouter;