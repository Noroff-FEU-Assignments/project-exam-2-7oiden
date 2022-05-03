import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js"; 

function EmailIcon() {
  return (
    <Icon
      path={mdiEmailOutline}
      className="navbar__search-icon"
      color
    />
  );
}

export default EmailIcon;
