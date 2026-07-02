const Home = require("../modals/home");
const Favourite = require("../modals/favourite");

exports.getHomes = (req, res, next) => {
    Home.fetchAll().then(([RegisteredHomes]) => {
        res.render('./store/home-list', {
            RegisteredHomes: RegisteredHomes,
            PageTitle: 'Home\'s List | airbnb',
            currentPage: 'home-list'
        });
    })
}
exports.getIndex = (req, res, next) => {
    Home.fetchAll().then(([RegisteredHomes]) => {
        res.render('./store/index', {
            RegisteredHomes: RegisteredHomes,
            PageTitle: 'Home | airbnb',
            currentPage: 'index'
        })
    })
}

exports.getBookings = (req, res, next) => {
    Home.fetchAll().then(([RegisteredHomes]) => {
        res.render('./store/bookings', {
            RegisteredHomes: RegisteredHomes,
            PageTitle: 'My Bookings | airbnb',
            currentPage: 'bookings'
        })
    })
}

exports.getReservation = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log("At home reserve page :" + homeId);
    Home.FindById(homeId).then(([homes]) => {
        const home = homes[0];
        console.log("Home Details Found:", home);
        res.render('./store/reserve', {
            home: home,
            PageTitle: 'Home Reservation | airbnb',
            currentPage: 'home-list'
        });
    });
}

exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavouriteHomes().then(([favouriteHomes]) => {
        res.render('./store/favourite-list', {
            favourites: favouriteHomes,
            PageTitle: 'My Favourites | airbnb',
            currentPage: 'favourites'
        });
    });
}

exports.postFavourites = (req, res, next) => {
    console.log("Came to Add to Favourites :", req.body);
    Favourite.addToFavourite(req.body.id).then(() => {
        console.log("Added to favourite");
        res.redirect("/favourite-list");
    }).catch(error => {
        console.log("Error adding to favourite:", error);
        res.redirect("/favourite-list");
    });
}

exports.getHomeDetail = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log("At home detail page :" + homeId);
    Home.FindById(homeId).then(([homes]) => {
        const home = homes[0];
        if (!home) {
            console.log("Home not found");
            res.redirect("/home-list");
        } else {
            res.render('./store/home-detail', {
                home: home,
                PageTitle: 'Home\'s Detail | airbnb',
                currentPage: 'home-list'
            });
        }
    });
}

exports.postDeleteFavourites = (req, res) => {
    const homeId = req.body.id;
    Favourite.DeleteById(homeId).then(() => {
        console.log("Deleted from favourite");
        console.log("Came to Delete Favourite: ", homeId)
        res.redirect('/favourite-list');
    }).catch(error => {
        console.log("Error deleting from favourite:", error);
        res.redirect('/favourite-list');
    });
}