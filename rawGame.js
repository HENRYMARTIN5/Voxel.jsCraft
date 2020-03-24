var createPlugins = require('voxel-plugins');
var plugins = createPlugins(game, {require:require});
var keys = game.plugins.get('voxel-keys');
plugins.load('mine');
plugins.load('reach');
plugins.load('carry')
game.plugins.get('voxel-carry').inventory