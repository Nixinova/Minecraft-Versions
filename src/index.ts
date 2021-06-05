import fs from 'fs';
import yaml from 'js-yaml';
import { Edition, Phase, Version, VersionData } from './types';

const Versions: { [edition: string]: { [phase: string]: { [version: string]: Version } } } = {};

const versionData: VersionData[] = yaml.load(fs.readFileSync(__dirname + '/versions.yml', { encoding: 'utf8' })) as VersionData[];
for (const data of versionData) {
    const [id, edition, phase, parent, vers] = data;
    for (const { name, type, date } of vers) {
        Versions[edition] ||= {};
        Versions[edition][phase] ||= {};
        Versions[edition][phase][id] = { name: name || id, type, date };
    }
}

export default Versions;
