export type Edition =
    | 'java'
    | 'bedrock'

export type Phase =
    | 'release'
    | 'beta'
    | 'alpha'
    | 'infdev'
    | 'indev'
    | 'classic'
    | 'pre-classic'

export type Type =
    | 'release'
    | 'snapshot'
    | 'beta'

export interface Version {
    name: VersionName,
    type: Type,
    parent: string | null,
    date: [number, number, number],
}

export type EditionTable = Record<Edition, PhaseTable>;
export type PhaseTable = Record<Phase, VersionTable>;
export type VersionTable = Record<string, Version[]>;

export type VersionName = string;

export type VersionData = [VersionName, Edition, Phase, VersionName, Version[]];
