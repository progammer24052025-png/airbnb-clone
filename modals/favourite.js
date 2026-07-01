//core Modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const FavouriteDataPath = path.join(rootDir, 'data', 'favourite.json')

module.exports = class Favourite {
    static addToFavourite(homeId, callback) {
        Favourite.getFavourites(favourate => {
            if (favourate.includes(homeId)) {
                callback("Home already added to favourite");
            }
            else {
                favourate.push(homeId);
                fs.writeFile(FavouriteDataPath, JSON.stringify(favourate), callback);
            }
        })
    };

    static getFavourites(callback) {
        fs.readFile(FavouriteDataPath, (error, data) => {
            if (error) {
                // File doesn't exist yet — create it with empty array
                fs.writeFile(FavouriteDataPath, '[]', err => {
                    callback([]);
                });
            } else {
                callback(JSON.parse(data));
            }
        });
    }

    static DeleteById(delHomeId, callback) {
        Favourite.getFavourites(homeIds => {
            homeIds = homeIds.filter(homeId => delHomeId !== homeId);
            fs.writeFile(FavouriteDataPath, JSON.stringify(homeIds), callback);

        })
    }
}