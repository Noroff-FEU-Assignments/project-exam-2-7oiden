import { MinusIcon, PlusIcon } from "../icons/MaterialIcons";

export function ShowButton() {
  return (
    <span className="description-button">
      <PlusIcon /> show
    </span>
  );
}

export function HideButton() {
  return (
    <span className="description-button">
      <MinusIcon /> hide
    </span>
  );
}
