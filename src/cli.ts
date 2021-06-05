#!/usr/bin/env node

import versions from './index';

import { EditionTable, PhaseTable, VersionTable, Version } from './types';

function log() {
    const args: string[] = process.argv.slice(2);
    let [edition, phase, version, n]: string[] = args;

    let editionTable: EditionTable = versions, phaseTable: PhaseTable, versionTable: VersionTable, versionList: Version[];
    if (!edition) return console.log(editionTable);
    phaseTable = editionTable[edition];
    if (!phase) return console.log(phaseTable);
    versionTable = phaseTable[phase];
    if (!version) return console.log(versionTable);
    versionList = versionTable[version];
    if (!n) return console.log(versionList);
    return console.log(versionList[+n]);
}

log();
