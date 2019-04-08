const Users = require('../models').Users;



const createEvent = async function (req, res) {
    res.send("Event created");
}
module.exports.createEvent = createEvent;


const readEvent = async function(req, res) {
    res.send("Event read");
}
module.exports.readEvent = readEvent;


const updateEvent = async function(req, res) {
    res.send("Event updated");
}
module.exports.updateEvent = updateEvent;


const deleteEvent = async function(req, res) {
    res.send("Event deleted");
}

module.exports.deleteEvent = deleteEvent;


