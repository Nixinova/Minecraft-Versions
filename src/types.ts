export enum Edition {
    Java = 'Java',
    Bedrock = 'Bedrock',
}

export enum Phase {
    Release = 'release',
    Beta = 'beta',
    Alpha = 'alpha',
    Infdev = 'infdev',
    Indev = 'indev',
    Classic = 'classic',
    PreClassic = 'pre-classic',
}

export enum Type {
    Release = 'release',
    Snapshot = 'snapshot',
    Beta = 'beta',
}

export interface Version {
    name: VersionName,
    type: Type,
    date: [number, number, number],
}

export type VersionName = string;

export type VersionData = [VersionName, Edition, Phase, VersionName, Version[]];
