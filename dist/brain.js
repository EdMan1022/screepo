var roleHarvester = require('role.harvester');

var brain = {
    main() {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            roleHarvester.run(creep);
        }
    }
}

module.exports = brain;