const { log } = require('console');
const req = require('express/lib/request');
const path = require('path');
// const jsonDB = require ('../model/jsonDatabase');
// const productModel = jsonDB('products');
let db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

db.Genres.findAll()
    .then(res => genres = res)
db.Format.findAll()
    .then(res => formats = res)


const productController = {

    alls:(req,res) => {
        let productos = productModel.all();
        res.render('./products/productList',{productos:productos,mil:toThousand})
    },
    productList:(req,res) => {
        let productos = productModel.all();
        res.render('./products/productList',{productos:productos,mil:toThousand})
    },
    edit2:(req, res) => {
        let id = req.params.id;
        let producto = productModel.find(id);
        res.render('./products/productEdit2',{producto})
    }, 
    create:(req,res) => {
        console.log('----------------------------');
        console.log(req.body.category);
        db.Images.create({
            url: req.file.filename
        })

        .then(img => {
            console.log(img)
            db.Products.create({
                name: req.body.name,
                artist: req.body.artist,
                IDImages:img.dataValues.id,
                IDgenre: req.body.genre,
                IDformat: req.body.format,
                description: req.body.description,
                price: Number(req.body.price),
            })
        })
        

        res.redirect("/products/productList");
    },
    detail:function (req,res) {
        let id = req.params.id;
        let producto = productModel.find(id);
        let productos = productModel.all();
        console.log(req.session.userLogged)
        res.render('./products/productDetail',{producto,mil:toThousand,productos:productos})
    },
    editarAccion:(req,res) => {
        let images = productModel.find(req.params.id);
        let producto ={
            id: req.params.id,
            name: req.body.productName,
            artist: req.body.productArt,
            description: req.body.productDescription,
            price:Number(req.body.productPrice),
            category: req.body.category,
            //image:req.file!=null?req.file.filename:images/albumes.imagen
            image: req.file.filename
        };
        productModel.update(producto);
        res.redirect("/products/productList")
    },
    delete:(req,res) => {
        productModel.delete(req.params.id);
        res.redirect("/products/productList");
    },
    

//ORIGINAL
    productCart:(req,res) => {
        res.render('productCart');
    },

    productDetail:(req,res) => {
        let id = req.params.id;
        let producto = productModel.find(id);
        res.render('productDetail',{producto,mil:toThousand})
    },
    productList:(req,res) => {
        let productos = productModel.all();
        res.render('productList',{productos:productos,mil:toThousand});
    },

    productAdd:(req,res) => {
        db.Genres.findAll()
            .then(function(genres) {
                return res.render('productAdd', {genres,formats})
            })
        
    },
    wishList:(req,res) => {
        res.render('wishList');
    },
    edit:(req, res) => {
        let id = req.params.id;
        let producto = productModel.find(id);
        res.render('productEdit',{producto})
    }
}


module.exports = productController;