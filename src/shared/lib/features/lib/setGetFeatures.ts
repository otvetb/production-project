import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatureFlags: FeatureFlags = {
    isAppRedesigned: true,
};

let featureFlags: FeatureFlags = {
    ...defaultFeatureFlags,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    return featureFlags?.[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
