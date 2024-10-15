"use client";

import { useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
	children: ReactNode;
}

export type AuthUser = {
	uid: string;
	email: string;
	username?: string;
	photoURL?: string;
};

export type ContextValue = {
	authUser: AuthUser | null;
	isLoading: boolean;
	signOut: () => void;
	setAuthUser: (value: AuthUser) => void;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [authUser, setAuthUser] = useState<AuthUser | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const clear = () => {
		setAuthUser(null);
		setIsLoading(false);
	};

	const authStateChanged = async (user: any) => {
		setIsLoading(true);
		if (!user) {
			clear();
			return;
		}
		setAuthUser({
			uid: user.uid,
			email: user.email,
			username: user.displayName,
			photoURL: user.photoURL
		});
		setIsLoading(false);
	};

	const signOut = () => {
		authSignOut(auth).then(() => clear());
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, authStateChanged);
		return () => unsubscribe();
	}, []);

	return <AuthContext.Provider value={{ authUser, isLoading, signOut, setAuthUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
