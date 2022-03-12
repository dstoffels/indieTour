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

export const createEmailUser = async ({ email, password, displayName }) => {
	const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
	await updateProfile(userCredentials.user, { displayName });
	sendEmailVerification(userCredentials.user);
};

export const emailLogin = async ({ email, password }) =>
	await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => {
	auth.signOut();
};
