'use strict';

module.exports = (app, db) =>{
    //Get All methods
    app.get('/methods',(req,res) => {
        db.methods.findAll().then(methods => {
            res.json(methods);
        });
    });
    // POST single omethod
  app.post('/method', (req, res) => {
    const name = req.body.name;
    db.methods.create({
      name: name,
    })
      .then(newMethod => {
        res.json(newMethod);
      })
  });
};