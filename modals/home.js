//core Modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const Favourite = require('./favourite');

const HomeDataPath = path.join(rootDir, 'data', 'homes.json')

module.exports = class home {
    constructor(house_name, location, description, price, image_url, rating, category, lat, lng) {
        this.house_name = house_name;
        this.location = location;
        this.description = description;
        this.price = price;
        this.image_url = image_url;
        this.rating = rating;
        this.category = category;
        this.lat = lat;
        this.lng = lng;

    }

    save() {
        home.fetchAll(RegisteredHomes => {

            if (this.id) {// edit home case
                console.log("edit case", this.id);
                RegisteredHomes = RegisteredHomes.map(home =>
                    home.id === this.id ? this : home
                );


            } else {// add home case
                console.log("add case");
                this.id = Math.random().toString();
                RegisteredHomes.push(this);
            }
            fs.writeFile(HomeDataPath, JSON.stringify(RegisteredHomes), error => {
                console.log("File Writing Concluded", error);
            });
        })

    }
    static fetchAll(callback) {
        fs.readFile(HomeDataPath, (error, data) => {
            if (error) {
                fs.writeFile(HomeDataPath, '[]', () => callback([]));
            } else {
                callback(JSON.parse(data));
            }
        });
    }
    static FindById(homeId, callback) {
        this.fetchAll(homes => {
            const homeFound = homes.find((home) => home.id === homeId);
            callback(homeFound);
        })
    }

    static DeleteById(homeId, callback) {
        this.fetchAll(homes => {
            homes = homes.filter(home => home.id !== homeId);
            fs.writeFile(HomeDataPath, JSON.stringify(homes), error => {
                if (error) return callback(error);
                Favourite.DeleteById(homeId, callback);
            });
        })
    }
}