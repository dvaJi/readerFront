'use strict';

// Works
module.exports = function (sequelize, DataTypes) {
  let Works = sequelize.define('works', {
    name: {
      type: DataTypes.STRING
    },
    stub: {
      type: DataTypes.STRING
    },
    uniqid: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    hidden: {
      type: DataTypes.BOOLEAN
    },
    language: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    demographicId: {
      type: DataTypes.INTEGER
    },
    licensed: {
      type: DataTypes.BOOLEAN
    },
    status: {
      type: DataTypes.INTEGER
    },
    statusReason: {
      type: DataTypes.TEXT
    },
    adult: {
      type: DataTypes.BOOLEAN
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    visits: {
      type: DataTypes.INTEGER
    }
  });

  Works.associate = function (models) {
    Works.hasMany(models.Chapter, { onDelete: 'cascade', hooks: true });
    Works.hasMany(models.PeopleWorks, { onDelete: 'cascade', hooks: true });
    Works.hasMany(models.WorksGenres, { onDelete: 'cascade', hooks: true });
  };

  return Works;
};
