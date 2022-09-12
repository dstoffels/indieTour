const domain = process.env.REACT_APP_API_DOMAIN;

export const bandsRequest = (band_id = '') => `${domain}bands/${band_id && band_id + '/'}`;
