export type Edition =
    | 'Java'
    | 'Bedrock'

export type Phase =
    | 'Release'
    | 'Beta'
    | 'Alpha'
    | 'Infdev'
    | 'Indev'
    | 'Classic'
    | 'Pre-Classic'

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
