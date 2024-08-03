#!/usr/bin/env node
const fs = require('fs');

const typeMap = {
    java: {
        'release': '### Full versions',
        'pre': '### Pres',
        'snapshot': '### Snapshots',
    },
    bedrock: {
        'release': '### Full versions',
        'beta': '### Betas',
    },
}

const templates = {
    java: `- ['%VER%', Java, Release, null, [{ type: %TYPE%, date: %DATE% }]]`,
    bedrock: `- ['%VER%', Bedrock, Release, null, [{ name: '%NAME%', type: %TYPE%, date: %DATE% }]]`,
};

function add(edition, type, ver, date, name) {
    name ??= 'v' + ver;

    if (!ver) throw 'No version specified!';
    if (!type) throw 'No version type specified!';
    if (!date) throw 'No date specified!';

    const filename = `../data/${edition}.yaml`;
    const fileContent = fs.readFileSync(filename, 'utf8');
    const lines = fileContent.split('\n');
    const headingIndex = lines.findIndex(line => line.includes(typeMap[edition][type]));
    if (headingIndex < 0) throw `Section for ${edition}.${type} not found!`;

    const insertionIndex = headingIndex + 1;
    const newLine = templates[edition]
        .replace('%VER%', ver)
        .replace('%TYPE%', type === 'pre' ? 'snapshot' : type)
        .replace('%DATE%', date)
        .replace('%NAME%', name)

    const linesNew = [...lines.slice(0, insertionIndex), newLine, ...lines.slice(insertionIndex)];
    fs.writeFileSync(filename, linesNew.join('\n'));
}

function cli() {
    const args = process.argv.slice(2);
    if (args.length < 4) {
        console.log('Usage: node add <edition> <type> <ver> <date> [<displayName>]');
        console.log('    Valid types: release, pre, snapshot, beta');
        console.log('    Example: node add bedrock release 1.21.1 2024-06-20');
    }
    else {
        try {
            add(...args);
            console.log('Added ' + args.join(' '));
        } catch (e) {
            console.error(e);
        }
    }
}
cli();
