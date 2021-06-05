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
    parent: string|null,
    date: [number, number, number],
}

export interface VersionTable {
    [version: string]: Version[]
}

export interface PhaseTable {
    [phase: string]: VersionTable
}

export interface EditionTable {
    [edition: string]: PhaseTable
}

export type VersionName = string;

export type VersionData = [VersionName, Edition, Phase, VersionName, Version[]];
