import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

function SearchIcon() {
  return (
      <Icon
        path={mdiMagnify}
        title="User Profile"
        className="navbar__search-icon"
        color=""
      />
  );
}

export default SearchIcon;
