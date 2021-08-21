import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import { VersionData, EditionTable, PhaseTable } from './types.js';

const Versions = {} as EditionTable;

const versionData: VersionData[] = [];
for (const file of ['java', 'bedrock']) {
    const filePath = path.resolve(__dirname, `../data/${file}.yaml`);
    const fileData: string = fs.readFileSync(filePath, { encoding: 'utf8' });
    versionData.push(...<VersionData[]>yaml.load(fileData));
}

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
