import { createContext, useContext } from "react";
import { ContextValue } from "./SearchBarProvider";

export const SearchBarContext = createContext<ContextValue | null>(null);

export const useSearchBarContext = () => {
	const context = useContext(SearchBarContext);
	if (!context) {
		throw new Error("useSearchBar must be used within an SearchBarProvider");
	}
	return context;
};
