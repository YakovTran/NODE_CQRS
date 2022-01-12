const products =[];

exports.input = (req, res, next) => 
res.render('add', {path:'add'});

exports.adding = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getting = (req, res, next) => 
    res.render('shop', {prods : products, path:'shop'});