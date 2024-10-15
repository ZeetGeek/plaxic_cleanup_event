"use client";

import { useState, ReactNode } from "react";
import { SearchBarContext } from "./SearchBarContext";

interface SearchBarProviderProps {
	children: ReactNode;
}

export type Search = string;

export type ContextValue = {
	search: string;
	setSearch: (value: Search) => void;
};

const SearchBarProvider: React.FC<SearchBarProviderProps> = ({ children }) => {
	const [search, setSearch] = useState<Search>("");

	return <SearchBarContext.Provider value={{ search, setSearch }}>{children}</SearchBarContext.Provider>;
};

export default SearchBarProvider;
