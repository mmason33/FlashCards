// Basic Flash Cards

const basicQuestions = require('./basicQuestions.js');
const inquirer = require('inquirer');

function BasicCard (questions) {

    this.questionList = questions;

}

BasicCard.prototype.askQuestions = function () {
    inquirer.prompt(basicQuestions.questions).then( function () {
        console.log('hey')
    });
}


const basic = new BasicCard(basicQuestions);


basic.askQuestions();

module.exports = BasicCard;