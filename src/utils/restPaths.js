const ROOT = 'http://127.0.0.1:3002';

export const restPath = path => ROOT + path;

// USER
export const USER_PATH = ROOT + '/user';
export const userPath = uid => `${USER_PATH}/${uid}`;

// BANDS
export const BANDS_PATH = ROOT + '/bands';
export const getBandPath = bandPath => `${BANDS_PATH}/${bandPath}`;

// MEMBERS
const MEMBERS = 'members';
export const membersPath = bandPath => `${ROOT + bandPath}/${MEMBERS}`;

// TOURS
const TOURS = 'tours';
export const toursPath = bandPath => `${ROOT + bandPath}/${TOURS}`;
