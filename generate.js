const fs = require('fs');

function generateThemeJson(answers) {
    let themeJson = {
        "name": answers.theme_name,
        "description": answers.theme_description,
        // Fill in the rest of the theme.json schema here
    };

    fs.writeFileSync('theme.json', JSON.stringify(themeJson, null, 2));
}

module.exports = generateThemeJson;
