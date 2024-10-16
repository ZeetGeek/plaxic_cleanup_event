// import { FirebaseError } from "firebase/app";
import { createContext, useContext } from "react";
import { ContextValue } from "./AuthProvider";

// interface AuthContextType {
// 	authUser: { email: string; username: string; uid: string };
// 	isLoading: boolean;
// 	signOut: () => void;
// 	// login: (email: string, password: string) => Promise<FirebaseError | null>;
// 	// logout: () => Promise<void>;
// }

export const AuthContext = createContext<ContextValue | null>(null);

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
