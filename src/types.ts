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
    PreRelease = 'pre-release',
    ReleaseCandidate = 'release candidate',
    Beta = 'beta',
}

export interface Version {
    type: Type,
    parent: string | null,
    date: [number, number, number],
}
