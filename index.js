const promptUser = require('./prompt');
const generateThemeJson = require('./generate');

promptUser().then(answers => {
    generateThemeJson(answers);
});