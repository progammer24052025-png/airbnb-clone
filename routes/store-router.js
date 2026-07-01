//User Router Extracted From App.js(External Module)
const express = require('express');
const StoreRouter = express.Router();

// Local Module
const { getHomes, getBookings, getFavouriteList, getIndex, getHomeDetail, postFavourites, getReservation, postDeleteFavourites } = require("../controllers/Store");

StoreRouter.get("/", getIndex);
StoreRouter.get("/home-list", getHomes);
StoreRouter.get("/bookings", getBookings);
StoreRouter.get("/favourite-list", getFavouriteList);
StoreRouter.get("/homes/:homeId", getHomeDetail);
StoreRouter.get("/reserve/:homeId", getReservation);
StoreRouter.post("/favourites", postFavourites);
StoreRouter.post("/favourites/delete/:homeId", postDeleteFavourites);

module.exports = StoreRouter;