const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(users => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').update((req, res) => {
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));

    const newUser = new User({username});

    newUser.save()
        .then(users => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}) 

module.exports = router;