const fs = require('fs');

module.exports = {
    addResumePage: (req, res) => {
        res.render('add-resume.ejs', {
            title: "Welcome to the Resume Page | Add Resume"
            ,message: ''
        });
    },
    addResume: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }

        let message = '';
        let resumeitem = req.body.resumeitem;
        let programtitle = req.body.programtitle;
        let schoolname = req.body.schoolname;
        let dateexpierence = req.body.dateexpierence;
        let jobtitle = req.body.jobtitle;
        let organization = req.body.organization;
        let date = req.body.date;
        let skilldescription = req.body.skilldescription;
        let skillcompetent = req.body.skillcompetent;
        let skilldesigned = req.body.skilldesign;
        let skillcreated = req.body.skillCreated;
   

       let resumeitemQuery = "SELECT * FROM `resume` WHERE resumeitem = '" + resumeitem + "'";

        db.query(resumeitemQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Resume already exists';
                res.render('add-resume.ejs', {
                    message,
                    title: "Welcome to Resume Page | Add a new Resume Item"
                });
            } else {
                // check the filetype before uploading it, no images to upload
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        // send the resume details to the database
                        let query = "INSERT INTO `resume` (resumeitem, programtitle, schoolname, dateexpierence, programdescription, jobtitle, organization, date, skilldescription, skillcompetent, skillDesigned, skillcreated) VALUES ('" +
                            resumeitem + "', '" + programtitle+ "', '" + schoolname + "', '" + dateexpierence + "', '" + programdescription + "', '" + jobtitle + "', '" + organization + "', '" + date + "', '" + skilldescription + "', '" + skillcompetent + "', '" + skilldesigned + "', '" + skillcreated + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
                    });
                } else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('add-resume.ejs', {
                        message,
                        title: "Welcome to Resume Page | Add a new Resume"
                    });
                }
            }
        });
    },
    editResumePage: (req, res) => {
        let resumeId = req.params.resumeitem;
        let query = "SELECT * FROM `resume` WHERE id = '" + resumeId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-resume.ejs', {
                title: "Edit Resume"
                ,resume: result[0]
                ,message: ''
            });
        });
    },
    editResume: (req, res) => {
        let resumeId = req.params.resumeitem;
        let programtitle = req.body.programtitle;
        let schoolname = req.body.schoolname;
        let dateexpierence = req.body.dateexpierence;
        let jobtitle = req.body.jobtitle;
        let organization = req.body.organization;
        let date = req.body.date;
        let skilldescription = req.body.skilldescription;
        let skillcompetent = req.body.skillcompetent;
        let skilldesigned = req.body.skilldesign;
        let skillcreated = req.body.skillCreated;
       

        let query = "UPDATE `resume` SET `programtitle` = '" + programtitle + "', `schoolname` = '" + schoolname + "', `dateexpierence` = '" + dateexpierence + "', `jobtitle` = '" + jobtitle + "' programtitle` = '" + programtitle + "', `organization` = '" + organization+ "', `date` = '" + organization + "', `skilldescription` = '" + skilldescription + "', `skilldesigned` = '" + skilldesigned + "', `skillcreated` = '" + skillcreated + "', skillcompetent` = '" + skillcompetent + "' WHERE `resume`.`resumeitem` = '" + resumeId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deletePlayer: (req, res) => {
        let resumeId = req.params.resumeId;
        let deleteResume = 'DELETE FROM `resume` WHERE  resumeitem = "' + resumeId + '"';
                db.query(deleteResume, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
          
    }
};