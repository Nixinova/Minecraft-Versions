import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import { VersionData, EditionTable, PhaseTable } from './types.js';

const Versions = {} as EditionTable;

const filename = path.resolve(__dirname, '../src/versions.yml');
const fileData: string = fs.readFileSync(filename, { encoding: 'utf8' });
const versionData = yaml.load(fileData) as VersionData[];

for (const data of versionData) {
    const [id, edition, phase, parent, vers] = data;
    for (const { name, type, date } of vers) {
        Versions[edition] ??= {} as PhaseTable;
        Versions[edition][phase] ??= {};
        Versions[edition][phase][id] ??= [];
        Versions[edition][phase][id].push({ name: name ?? id, parent: parent ?? null, type, date });
    }
}

export = Versions;
