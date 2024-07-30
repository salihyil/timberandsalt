export type NavItems = {
  name: string;
  link: string;
  icon?: JSX.Element;
}[];


export enum Routes {
  HOME = "/",
  MENU = "/menu",
  GALLERY = "/gallery",
  CONTACT_US = "/contact-us",
}