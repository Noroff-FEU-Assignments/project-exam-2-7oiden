import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiBed } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
// import { mdiCircleSmall } from "@mdi/js";
import { mdiCopyright } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";

export function StarIcon() {
  return (
    <Icon path={mdiStar} className="material-icon star-icon" color="default" />
  );
}

export function LocationIcon() {
  return (
    <Icon
      path={mdiMapMarker}
      className="location-icon"
      color="default"
    />
  );
}

export function SearchIcon() {
  return (
    <Icon
      path={mdiMagnify}
      title="User Profile"
      className="navbar__search-icon"
      color="default"
    />
  );
}

export function EmailIcon() {
  return (
    <Icon
      path={mdiEmailOutline}
      className="navbar__search-icon"
      color="default"
    />
  );
}

export function BedIcon() {
  return (
    <Icon path={mdiBed} className="bed-icon" color="default" />
  );
}

export function BinIcon() {
  return (
    <Icon path={mdiDelete} className="bin-icon" color="default" />
  );
}

// export function BulletIcon() {
//   return <Icon path={mdiCircleSmall} className="bullet-icon" color="default" />;
// }

export function CopyrightIcon() {
  return (
    <Icon
      path={mdiCopyright}
      className="copyright-icon"
      color="default"
    />
  );
}

export function ChevronLeftIcon() {
    return (
      <Icon
        path={mdiChevronLeft}
        className="chevron"
        color="default"
      />
    );
}