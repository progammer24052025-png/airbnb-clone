const Home = require("../modals/home");

exports.getHostManageHomes = (req, res, next) => {
    Home.fetchAll().then(([RegisteredHomes]) => res.render('./host/host-home-list', {
        RegisteredHomes: RegisteredHomes,
        PageTitle: 'Host\'s Home List | airbnb',
        currentPage: 'host-home-list'
    }));
}

exports.getAddHome = (req, res, next) => {
    res.render('./host/edit-home', {
        PageTitle: 'Add Home | Airbnb',
        currentPage: 'Add-Home',
        editing: false
    });
}

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing === 'true';
    Home.FindById(homeId).then(([homes]) => {
        const home = homes[0];
        if (!home) {
            console.log("Home not Found");
            return res.redirect('/host/host-home-list');
        }

        console.log(homeId, editing, home)
        res.render('./host/edit-home', {
            home: home,
            PageTitle: 'Edit Home | Airbnb',
            currentPage: 'Manage Your Homes',
            editing: editing
        });

    });
}

exports.postAddHome = (req, res) => {

    const { house_name, location, description, price, image_url, rating, category } = req.body;
    const home = new Home(house_name, location, description, price, image_url, rating, category);
    home.save().then(() => {
        res.redirect('/host/host-home-list');
    });
}

exports.postEditHome = (req, res) => {

    const { id, house_name, location, description, price, image_url, rating, category } = req.body;
    const home = new Home(house_name, location, description, price, image_url, rating, category);
    home.id = id;
    home.save().then(() => {
        res.redirect('/host/host-home-list');
    });
}

exports.postDeleteHome = (req, res) => {
    const homeId = req.body.id;
    console.log("Came to Delete: ", homeId)
    Home.DeleteById(homeId).then(() => {
        console.log("Deleted Successfully")
        res.redirect('/host/host-home-list');
    }).catch(error => {
        console.log("Error in deleting", error)
        res.redirect('/host/host-home-list');
    });

}
