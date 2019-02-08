#!/usr/bin/env node

const card = `
Torben Werner

Nice to meet you.

https://github.com/torbensky
https://imirp.org
https://www.npmjs.com/~torbensky
`

function printCard(content) {
    const width = calcCardWidth(content);

    const top = '-'.repeat(width + 4);
    const middle = content.split('\n').map(line => "| " + padLine(line, width) + " |").join('\n');
    const bottom = top;

    console.log(`${top}\n${middle}\n${bottom}`);
}

function padLine(line, width) {
    const paddingNeeded = width - line.length;
    if (paddingNeeded > 0) {
        return line + " ".repeat(paddingNeeded)
    }

    return line;
}

function calcCardWidth(content) {
    let maxWidth = 0;
    content.split('\n').forEach(line => {
        if (line.length > maxWidth) {
            maxWidth = line.length;
        }
    });

    return maxWidth;
}

printCard(card);