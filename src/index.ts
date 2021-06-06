import fs from 'fs';
import yaml from 'js-yaml';
import { VersionData, EditionTable } from './types.js';

const Versions: EditionTable = {};

const versionData: VersionData[] = yaml.load(fs.readFileSync(__dirname + '/versions.yml', { encoding: 'utf8' })) as VersionData[];
for (const data of versionData) {
    const [id, edition, phase, parent, vers] = data;
    for (const { name, type, date } of vers) {
        Versions[edition] ||= {};
        Versions[edition][phase] ||= {};
        Versions[edition][phase][id] ||= [];
        Versions[edition][phase][id].push({ name: name || id, parent: parent || null, type, date });
    }
}

export = Versions;
