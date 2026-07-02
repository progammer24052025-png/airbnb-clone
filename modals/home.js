
const db = require("../utils/databaseUtil");

module.exports = class home {
    constructor(houseName, location, description, price, imageUrl, rating, category) {
        this.houseName = houseName;
        this.location = location;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.category = category;

    }

    save() {
        if (this.id) {
            // UPDATE existing home
            return db.execute(
                'UPDATE homes SET house_name = ?, location = ?, description = ?, price = ?, image_url = ?, rating = ?, category = ? WHERE id = ?',
                [this.houseName, this.location, this.description, this.price, this.imageUrl, this.rating, this.category, this.id]
            );
        } else {
            // INSERT new home
            return db.execute(
                'INSERT INTO homes (house_name, location, description, price, image_url, rating, category) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [this.houseName, this.location, this.description, this.price, this.imageUrl, this.rating, this.category]
            );
        }
    }
    static fetchAll() {
        return db.execute('SELECT * FROM homes');
    }
    static FindById(homeId) {
        return db.execute('SELECT * FROM homes WHERE id = ?', [homeId]);
    }

    static DeleteById(homeId) {
        return db.execute('DELETE FROM homes WHERE id = ?', [homeId]);
    }

}