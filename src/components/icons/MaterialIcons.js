import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiStar } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiBed } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiCopyright } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiFormatQuoteClose } from "@mdi/js";
import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";
import { mdiAlertDecagram } from "@mdi/js";
import { mdiContentCopy } from "@mdi/js";

export function MenuIcon() {
  return <Icon path={mdiMenu} className="menu-icon" color="default" />;
}

export function PlusIcon() {
  return <Icon path={mdiPlus} className="plus-icon" color="default" />;
}

export function MinusIcon() {
  return <Icon path={mdiMinus} className="minus-icon" color="default" />;
}

export function StarIcon() {
  return <Icon path={mdiStar} className="star-icon" color="default" />;
}

export function LocationIcon() {
  return <Icon path={mdiMapMarker} className="location-icon" color="default" />;
}

export function SearchIcon() {
  return (
    <Icon
      path={mdiMagnify}
      // title="Search"
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
  return <Icon path={mdiBed} className="bed-icon" color="default" />;
}

export function BinIcon() {
  return <Icon path={mdiDelete} className="bin-icon" color="default" />;
}

export function CopyrightIcon() {
  return (
    <Icon path={mdiCopyright} className="copyright-icon" color="default" />
  );
}

export function QuoteIcon() {
  return (
    <Icon path={mdiFormatQuoteClose} className="quote-icon" color="default" />
  );
}

export function NewIcon() {
  return <Icon path={mdiAlertDecagram} className="new-icon" color="default" />;
}

export function CopyIcon() {
  return <Icon path={mdiContentCopy} className="copy-icon" color="default" />;
}
