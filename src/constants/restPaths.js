const ROOT = 'http://127.0.0.1:3002';

// USER
export const USER_PATH = ROOT + '/user';
// BANDS
export const BANDS_PATH = ROOT + '/bands';
export const bandPath = bandPath => `${ROOT}${bandPath}`;

// MEMBERS
const MEMBERS = 'members';
export const membersPath = bandPath => `${ROOT}${bandPath}/${MEMBERS}`;
