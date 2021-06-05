import fs from 'fs';
import yaml from 'js-yaml';
import { Edition, Phase, Version } from './types';

const Versions: { [edition: string]: { [phase: string]: { [version: string]: Version } } } = {};

type VersionData = [string, Edition, Phase, Version[]];
const versionData: VersionData[] = yaml.load(fs.readFileSync(__dirname + '/versions.yml', { encoding: 'utf8' })) as VersionData[];
for (const data of versionData) {
    const [name, edition, phase, vers] = data;
    for (const { type, parent, date } of vers) {
        Versions[edition] ||= {};
        Versions[edition][phase] ||= {};
        Versions[edition][phase][name] = { type, parent: parent || null, date };
    }
}
console.log(Versions.Java.Release['1.17'])

export default Versions;
