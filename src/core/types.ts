export type SessionMode = 'immersive-ar' | 'immersive-vr' | 'inline';

export type ReferenceSpaceType = 'local-floor' | 'bounded-floor' | 'unbounded' | 'local' | 'viewer';

export interface XrConfig {
    sessionMode: SessionMode;
    referenceSpaceType: ReferenceSpaceType;
    optionalFeatures: boolean;
}
