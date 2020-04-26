const fs = require('fs');

module.exports = {
    addPortfolioPage: (req, res) => {
        res.render('add_portfolio.ejs', {
            title: "Welcome to the Portfolio Page | Add Portfolio Item"
            ,message: ''
        });
    },
    addPortfolio: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }

        let projectname = req.body.projectname;
        let projectdate = req.body.projectdate;
        let projectpurpose = req.body.projectPurpose;
        let projectdescription = req.body.projectDescription;
        let portfolioitem = req.body.portfolioitem;
        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = username + '.' + fileExtension;

       let portfolioitemQuery = "SELECT * FROM `portfolio` WHERE portfolioitem = '" + portfolioitem + "'";
   
        db.query(portfolioitemQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Portfolio Item already exists';
                res.render('add-portfolio.ejs', {
                    message,
                    title: "Welcome to the Portfolio Page | Add a Portfolio Item"
                });
            } else {
                // check the filetype before uploading it
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        // send the player's details to the database
                        let query = "INSERT INTO `fs1030_individual_project` (projectname, projectdate, projectpurpose, projectdesciption) VALUES ('" +
                            projectname + "', '" + projectdate + "', '" + projectpurpose + "', '" + projectdescription + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
                    });
                } else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('add-player.ejs', {
                        message,
                        title: "Welcome to the Portfolio Page  | Add a Portfolio Item"
                    });
                }
            }
        });
    },
    editPortfolioPage: (req, res) => {
        let portfolioId = req.params.portfolioitem;
        let query = "SELECT * FROM `portfolio` WHERE id = '" + portfolioId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-portfolio.ejs', {
                title: "Edit Portfolio Item"
                ,portfolio: result[0]
                ,message: ''
            });
        });
    },
    editPortfolio: (req, res) => {
        let portfolioId = req.params.portfolioitems;
        let projectName = req.body.projectName;
        let projectDate = req.body.projectDate;
        let projectPurpose = req.body.projectPurpose;
        let projectDescription = req.body.projectDescription;

        let query = "UPDATE `portfolio` SET `projectName` = '" + projectName + "', `projectDate` = '" + projectDate + "', `projectPurpose` = '" + projectPurpose + "', `projectDescription` = '" + projectDescription + "' WHERE `portfolio`.`portfolioitem` = '" + portfolioId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deletePortfolio: (req, res) => {
        let portfolioId = req.params.portfolioitem;
        let deletePortfolio = 'DELETE FROM `portfolio` WHERE  portfolioitem = "' + portfolioId + '"';
        
                db.query(deletePortfolio, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            
        
    }
};