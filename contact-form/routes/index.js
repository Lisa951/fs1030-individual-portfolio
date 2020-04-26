module.exports = {
    getPortfolioPage: (req, res) => { 
        let query = SELECT * FROM `fs1030_individual_project` ; // query database to get portfolio, and resume

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to my Portfolio | View Resume and Portfolio"
                ,portfolio, resume: result
            });
        });
    },
};