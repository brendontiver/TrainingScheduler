'use strict';

module.exports = (sequelize, DataTypes) => {

  var event = sequelize.define('event', {

    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventLocation: DataTypes.STRING,

  }, {

      classMethods: {

        associate: function (models) {

          // associations can be defined here

        }

      }

    });

  return event;

};