import { createContext, useContext } from "react";

const defaultAuthor = "hoovks";

const AuthorContext = createContext<string>(defaultAuthor);

export const useAuthor = () => {
  return useContext(AuthorContext);
};
