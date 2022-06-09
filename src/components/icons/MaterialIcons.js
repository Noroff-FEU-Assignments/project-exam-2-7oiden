import Icon from "@mdi/react";
import {
  mdiMenu,
  mdiStar,
  mdiMapMarker,
  mdiMagnify,
  mdiBed,
  mdiDelete,
  mdiCopyright,
  mdiEmailOutline,
  mdiFormatQuoteClose,
  mdiPlus,
  mdiMinus,
  mdiContentCopy,
} from "@mdi/js";

export function MenuIcon({ color, size }) {
  return (
    <Icon path={mdiMenu} className="menu-icon" color={color} size={size} />
  );
}

export function PlusIcon({ color, size }) {
  return (
    <Icon path={mdiPlus} className="show-hide-icon" color={color} size={size} />
  );
}

export function MinusIcon({ color, size }) {
  return (
    <Icon
      path={mdiMinus}
      className="show-hide-icon"
      color={color}
      size={size}
    />
  );
}

export function StarIcon({ color, size }) {
  return <Icon path={mdiStar} color={color} size={size} />;
}

export function LocationIcon({ color, size }) {
  return <Icon path={mdiMapMarker} color={color} size={size} />;
}

export function SearchIcon({ color, size }) {
  return (
    <Icon
      path={mdiMagnify}
      className="search-icon"
      color={color}
      size={size}
    />
  );
}

export function EmailIcon({ color, size }) {
  return (
    <Icon
      path={mdiEmailOutline}
      className="email-icon"
      color={color}
      size={size}
    />
  );
}

export function BedIcon({ color, size }) {
  return <Icon path={mdiBed} color={color} size={size} />;
}

export function BinIcon({ color, size }) {
  return (
    <Icon path={mdiDelete} className="delete__icon" color={color} size={size} />
  );
}

export function CopyrightIcon({ color, size }) {
  return <Icon path={mdiCopyright} color={color} size={size} />;
}

export function QuoteIcon({ color, size }) {
  return (
    <Icon
      path={mdiFormatQuoteClose}
      className="quote-icon"
      color={color}
      size={size}
    />
  );
}

export function CopyIcon({ color, size }) {
  return (
    <Icon
      path={mdiContentCopy}
      className="copy-icon"
      color={color}
      size={size}
    />
  );
}
