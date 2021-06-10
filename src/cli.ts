#!/usr/bin/env node

import yargs from 'yargs-parser';
import versions from './index.js';
import { EditionTable, PhaseTable, VersionTable, Version } from './types.js';

const caps = (text: string): string => text[0].toUpperCase() + text.substr(1).toLowerCase();

function getData(edition: string, phase: string, version: string, n: string) {
    let editionTable: EditionTable = versions, phaseTable: PhaseTable, versionTable: VersionTable, versionList: Version[];
    if (!edition) return console.log(editionTable);
    phaseTable = editionTable[caps(edition)];
    if (!phase) return console.log(phaseTable);
    versionTable = phaseTable[caps(phase)];
    if (!version) return console.log(versionTable);
    versionList = versionTable[version];
    if (!n) return console.log(versionList);
    return console.log(versionList[+n]);
}

const valid: Record<string, any> = {
    editions: ['Java'],
    phases: {
        java: ['Release', 'Beta'],
    },
};

const argOpts = {
    alias: {
        full: ['f'],
        help: ['h'],
    },
    boolean: ['full', 'help'],
};
const args = yargs(process.argv.slice(2), argOpts);
const [edition, phase, version, n]: string[] = args._;

if (args.help) {
    console.log(`Usage: mcdata [--full] <edition> <phase> [<version>] [<n>]`);
}
else if (args.full || version) getData(edition, phase, version, n);
else if (!edition) console.log(`[Minecraft-Versions] Valid editions: ${valid.editions.join(', ')}`);
else if (!phase) console.log(`[Minecraft-Versions] Valid phases: ${valid.phases[edition.toLowerCase()].join(', ')}`);
else if (!version) console.log(`[Minecraft-Versions] Please specify a version.`);

