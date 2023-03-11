import yargs from 'yargs-parser';

import versions from './index.js';
import { EditionTable, PhaseTable, VersionTable, Edition, Phase, Version } from './types.js';
const VERSION = require('../package.json').version;

const caps = <T extends string>(text: T): T => text[0].toUpperCase() + text.substr(1).toLowerCase() as T;

function getData(edition: Edition, phase: Phase, version: string, index: number, param: keyof Version) {
    let editionTable: EditionTable = versions, phaseTable: PhaseTable, versionTable: VersionTable, versionList: Version[];
    if (!edition) return console.log(editionTable);
    phaseTable = editionTable[caps(edition)];
    if (!phase) return console.log(phaseTable);
    versionTable = phaseTable[caps(phase)];
    if (!version) return console.log(versionTable);
    versionList = versionTable[version];
    if (isNaN(index)) return console.log(versionList);
    let versionData = versionList[index];
    if (!param) return console.log(versionData);
    return console.log(versionData[param]);
}

const stringify = (data: any) => JSON.stringify(data).replace(/"/g, '').replace(/[:,]/g, '$& ');

const valid: Record<string, any> = {
    editions: ['Java', 'Bedrock'],
    phases: {
        java: ['Release', 'Beta', 'Alpha', 'Infdev', 'Indev', 'Classic'],
        bedrock: ['Release', 'Alpha'],
    },
};

const argOpts = {
    alias: {
        full: ['f'],
        help: ['h'],
        version: ['v'],
    },
    boolean: ['full', 'help', 'version'],
};
const args = yargs(process.argv.slice(2), argOpts);
const [edition, phase, version, index, param]: string[] = args._.map(arg => arg.toString());

if (args.help) {
    console.log(`
    [Minecraft-Versions]

    [Usage]
        mcdata <edition> <phase> <version> [<index>] [<param>]
            Gets the data of a single version
        mcdata --full <edition> <phase>
            Lists all versions of a development phase
        mcdata --help
            Prints this help message.
        mcdata --version
            Prints the current version (v${VERSION}).

    [Parameters]
        <edition>
            The edition of Minecraft.
            Valid values: ${stringify(valid.editions)}
        <phase>
            The edition of Minecraft.
            Valid values: ${stringify(valid.phases)}
        <version>
            The version number.
        <index>
            Grab a specific version that has this version number (as some versions are reuploaded).
        <param>
            Grab a specific value from the resulting data.

    [Examples]
        > mcdata java release 20w07a
        [ { name: '20w07a', parent: '1.16', type: 'snapshot', date: 2020-02-14 } ]

        > mcdata bedrock alpha 0.16.0 0
        { name: 'v0.16.0 alpha', parent: null, type: 'release', date: 2016-10-21 }

        > mcdata java release 1.18.1 0 date
        2021-12-10
    `);
}
else if (args.version) {
    console.log(VERSION);
}
else if (args.full || version) {

    if (!valid.editions.map((ed:string) => ed.toLowerCase()).includes(edition.toLowerCase()))
        console.error(`Invalid edition '${edition}'. Valid editions: ${valid.editions}`);
    else if (!valid.phases[edition].map((phase: string) => phase.toLowerCase()).includes(phase.toLowerCase()))
        console.error(`Invalid phase '${phase}'. Valid phases: ${valid.phases[edition]}`);
    else
        getData(edition as Edition, phase as Phase, version, +index, param as keyof Version);
}
else {
    console.error(`Invalid input. Type 'mcdata --help' for help.`);
}
