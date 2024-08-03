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
    java: `- ['%VER%', Java, Release, %PARENT%, [{ name: %NAME%, type: %TYPE%, date: %DATE% }]]`,
    bedrock: `- ['%VER%', Bedrock, Release, %PARENT%, [{ name: '%NAME%', type: %TYPE%, date: %DATE% }]]`,
};

function add(edition, type, ver, date, name, parent) {
    if (edition === 'bedrock') {
        name ??= (type === 'release' ? 'v' : 'beta ') + ver;
        parent ??= ver.split('.').slice(0, 3).join('.'); // a.b.c.d -> a.b.c
    }
    if (edition === 'java') {
        parent ??= ver.split('-pre')[0].replace(ver, '') || null; // 1.20-pre1 -> 1.20; 20w06a -> null (can't tell)
    }

    if (!ver) throw 'No version specified!';
    if (!type) throw 'No version type specified!';
    if (!date) throw 'No date specified!';
    if (!/\d{4}-\d{2}-\d{2}|~/.test(date)) throw 'Invalid date!';

    const filename = `../data/${edition}.yaml`;
    const fileContent = fs.readFileSync(filename, 'utf8');
    const lines = fileContent.split('\n');
    const headingIndex = lines.findIndex(line => line.includes(typeMap[edition][type]));
    if (headingIndex < 0) throw `Section for ${edition}.${type} not found!`;

    // Set to next line after a #header
    let insertionIndex = headingIndex;
    while (lines[insertionIndex].startsWith('#'))
        insertionIndex++;

    const newLine = templates[edition]
        .replace('%VER%', ver)
        .replace('%TYPE%', type === 'pre' ? 'snapshot' : type)
        .replace('%DATE%', date)
        .replace('%NAME%', name || ver)
        .replace('%PARENT%', parent ? `'${parent}'` : null)

    const linesNew = [...lines.slice(0, insertionIndex), newLine, ...lines.slice(insertionIndex)];
    fs.writeFileSync(filename, linesNew.join('\n'));
}

function cli() {
    const args = process.argv.slice(2);
    if (args.length < 4) {
        console.log('Usage: node add <edition> <type> <ver> <date> [<displayName>] [<parent>]');
        console.log('    Valid types: release, pre, snapshot, beta');
        console.log('    Example: node add bedrock release 1.21.1 2024-06-20');
        console.log('    Warning: Script is very naive. Please double check all additions.');
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
