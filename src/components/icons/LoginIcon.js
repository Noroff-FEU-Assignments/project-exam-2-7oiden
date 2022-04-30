import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

function LoginIcon() {
  return (
    <Icon
      path={mdiAccountCircle}
      title="User Profile"
      className="navbar__account-icon"
      color
    />
  );
}
export default LoginIcon;
