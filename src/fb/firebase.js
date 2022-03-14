import axios from 'axios';
import { USER_PATH } from 'constants/restPaths.js';
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

export const authHeader = async () => {
	auth.currentUser?.reload();
	return { headers: { auth: await auth.currentUser?.getIdToken(true) } };
};

export const createEmailUser = async ({ email, password, displayName }) => {
	const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
	const { user } = userCredentials;
	await updateProfile(user, { displayName });
	const headers = await authHeader();
	await axios.post(USER_PATH, { displayName, hasValidPW: true }, headers);
	await sendEmailVerification(user);
};

export const emailLogin = async ({ email, password }) =>
	await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => {
	await auth.signOut();
};
