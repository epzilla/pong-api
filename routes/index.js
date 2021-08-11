const players = require('./players');
const matches = require('./matches');
const devices = require('./devices');
const stats = require('./stats');

module.exports = function (models, app, sequelize, sendSocketMsg, registerForMsg) {
  matches.init(models, sequelize, sendSocketMsg, registerForMsg);
  players.init(models);
  devices.init(models);
  stats.init(models, sequelize);

  // Players
  app.get('/players', players.get);
  app.post('/players', players.create);

  // Matches/Games
  app.get('/matches/most-recent/:count', matches.mostRecent);
  app.get('/matches/current', matches.current);
  app.get('/matches/can-update-score/:deviceId', matches.canUpdate);
  app.get('/matches/:id', matches.findById);
  app.post('/matches/create', matches.create);
  app.post('/matches/finish', matches.finish);
  app.post('/matches/add-devices', matches.addDevices);
  app.post('/games/add', matches.addGame);
  app.post('/games/update', matches.updateGame);

  // Devices
  app.get('/devices', devices.get);
  app.post('/devices', devices.create);

  // Stats
  app.get('/stats/head-to-head/:player1Id/:player2Id', stats.matchesByPlayers);

  app.get('/*', (req, res) => res.render('index'));
};
