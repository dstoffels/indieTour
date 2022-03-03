import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendEmailVerification,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';

import { firebaseConfig } from './firebase.config.js';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const generateAuthData = userCredentials => {
	const { uid, email, emailVerified, displayName, stsTokenManager } = userCredentials.user;
	return { user: { uid, email, emailVerified, displayName }, token: stsTokenManager.accessToken };
};

export const createEmailUser = async ({ email, password, displayName }) => {
	const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
	await updateProfile(userCredentials.user, { displayName });
	sendEmailVerification(userCredentials.user);
	return generateAuthData(userCredentials);
};

export const emailLogin = async ({ email, password }) => {
	const userCredentials = await signInWithEmailAndPassword(auth, email, password);
	return generateAuthData(userCredentials);
};
