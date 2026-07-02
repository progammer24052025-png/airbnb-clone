
const db = require("../utils/databaseUtil");

module.exports = class Favourite {

    static addToFavourite(homeId) {
        return db.execute('INSERT IGNORE INTO favourites (home_id) VALUES (?)', [homeId]);
    }

    static getFavourites() {
        return db.execute('SELECT home_id FROM favourites');
    }

    static getFavouriteHomes() {
        return db.execute(
            'SELECT homes.* FROM homes INNER JOIN favourites ON homes.id = favourites.home_id'
        );
    }

    static DeleteById(homeId) {
        return db.execute('DELETE FROM favourites WHERE home_id = ?', [homeId]);
    }
}