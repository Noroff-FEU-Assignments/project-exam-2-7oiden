import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LinkContext = React.createContext([null, () => {}]);

export const LinkProvider = (props) => {
  const [link, setLink] = useLocalStorage("link", null);
  return (
    <LinkContext.Provider value={[link, setLink]}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
