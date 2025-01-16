const mongoose = require('mongoose');
const Campground = require('../models/campground');
const { places, descriptors } = require('./seedHelpers');
const cities = require('./cities')


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '67862fc281e57461fcb92845',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [{
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866066/CampgroundReviewWebsite/oleughbrau4ny0mk5wkt.avif',
                    filename: 'CampgroundReviewWebsite/oleughbrau4ny0mk5wkt'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866067/CampgroundReviewWebsite/d7efhjlavksawwvkyf4f.webp',
                    filename: 'CampgroundReviewWebsite/d7efhjlavksawwvkyf4f'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866067/CampgroundReviewWebsite/smpcms1tvf7r0pdal904.jpg',
                    filename: 'CampgroundReviewWebsite/smpcms1tvf7r0pdal904'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866068/CampgroundReviewWebsite/lq8fcda8noz3gp8yjjyr.avif',
                    filename: 'CampgroundReviewWebsite/lq8fcda8noz3gp8yjjyr'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866068/CampgroundReviewWebsite/cdutz7f3jpu6yaip7kta.avif',
                    filename: 'CampgroundReviewWebsite/cdutz7f3jpu6yaip7kta'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866067/CampgroundReviewWebsite/oncg31ii0wt0qiv9k3gp.avif',
                    filename: 'CampgroundReviewWebsite/oncg31ii0wt0qiv9k3gp'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866067/CampgroundReviewWebsite/gga2vgldfhfputhhdole.avif',
                    filename: 'CampgroundReviewWebsite/gga2vgldfhfputhhdole'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866070/CampgroundReviewWebsite/csgzjjsiaer11iw8extc.jpg',
                    filename: 'CampgroundReviewWebsite/csgzjjsiaer11iw8extc'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866068/CampgroundReviewWebsite/yozsvozxpasyxuovueuw.webp',
                    filename: 'CampgroundReviewWebsite/yozsvozxpasyxuovueuw'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866070/CampgroundReviewWebsite/qjgnsv4ugxjxiqwubdxd.jpg',
                    filename: 'CampgroundReviewWebsite/qjgnsv4ugxjxiqwubdxd'
                },
                {
                    url: 'https://res.cloudinary.com/dawpcsfy6/image/upload/v1736866067/CampgroundReviewWebsite/d7efhjlavksawwvkyf4f.webp',
                    filename: 'CampgroundReviewWebsite/d7efhjlavksawwvkyf4f'
                }

            ],
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis ut inventore deserunt nulla. Exercitationem nemo quod quia quisquam rerum quo suscipit numquam optio dignissimos, reprehenderit magnam facere? Dolores, quisquam.',
            price
        })
        await camp.save();
    }

}

seedDB().then(() => {
    mongoose.connection.close();
});