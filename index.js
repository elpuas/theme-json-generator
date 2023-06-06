#!/usr/bin/env node

import promptUser from './prompt.js';
import generateThemeJson from './generate.js';

promptUser().then(answers => {
    generateThemeJson(answers);
});