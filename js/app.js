//let testModule = require('./module'); // import module.js

window.addEventListener('load', function () {
    console.log('this.ready');
    //testModule();

    function Runner (name) {
        this.name = name;
        this.frozen = false;
        this.hasFlag = false;
    };

    function Chaser (name) {
        this.name = name;
        this.tag = function() {
            console.log('tagging somebody');
        };
    };

    function TeamChaser () {
        this.roster = [];
        this.teamCap = 5;
        this.win = false;
        this.checkWin = function() {
            //check if all of the runners are frozen.
        }
    };

    function TeamRunner () {
        this.roster = [];
        this.teamCap = 5;
        this.win = false;
        this.checkWin = function() {
            //check if a team member has the flag
        };
    };

    function Flag (color) {
        this.color = 'color';
        this.isFlag = true;
    };

    let RunTeam = [
        new Runner('Jill'),
        new Runner('Steven'),
        new Runner('Margot'),
    ];

    console.log(RunTeam);
});