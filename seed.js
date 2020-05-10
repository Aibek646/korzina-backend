require('dotenv').config()
const mongoose = require('mongoose')
const db = require('./models')


const items = [
    // {
    //     name: 'Polo',
    //     description: 'The Iconic Mesh Polo Shirt - All Fits',
    //     image: '/images/download.jpeg',
    //     image2: '/images/downloadcolor.jpeg',
    //     price: '90$'
    // },
    {

        name: 'Polo',
        description: 'Custom Slim Stretch Mesh Polo',
        image: '/images/picture1.webp',
        image2: '/images/picture1color.jpeg',
        price: '125$',
        color: 'white',
        color2: 'blue',
    },
    {

        name: 'Polo',
        description: 'Custom Slim Fit Tie-Dye Polo',
        image: '/images/picture2.jpeg',
        price: '135$',
        color: 'red',
        
    },
    {

        name: 'Polo',
        description: 'Classic Polo Sport Bear Polo',
        image: '/images/picture3.webp',
        image2: '/images/picture3color.jpeg',
        price: '110$',
        color: 'white',
        color2: 'blue',
    },
    {

        name: 'Polo',
        description: 'Custom Slim Triple-Pony Polo',
        image: '/images/picture4.jpeg',
        image2: '/images/picture4color.jpeg',
        price: '140$',
        color: 'red',
        color2: 'white'

    },
];


db.Item.create(items, (err, newItems) => {
    if(err){
        console.log(err);
        process.exit();
    }
    console.log(`Succesfully created ${newItems.length} items`);
    process.exit()
})

