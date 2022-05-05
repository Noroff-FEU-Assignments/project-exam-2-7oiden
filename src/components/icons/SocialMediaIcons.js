import Icon from "@mdi/react";
import { mdiInstagram } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";

export function InstagramIcon() {
  return (
    <Icon path={mdiInstagram} className="social-media-icon" color="default" />
  );
}

export function FacebookIcon() {
  return (
    <Icon path={mdiFacebook} className="social-media-icon" color="default" />
  );
}

export function TwitterIcon() {
  return (
    <Icon path={mdiTwitter} className="social-media-icon" color="default" />
  );
}
