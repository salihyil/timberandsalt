import { NavItems } from "@/app/types";

export const navItems: NavItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const letterVariants = {
  initial: { opacity: 0, x: 50 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const items = [
  {
    id: 1,
    paragraf:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    backgroundImage: "/comments/comment1.jpg",
    by: "Salih Yılmaz",
  },
  {
    id: 2,
    paragraf:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate error amet, nulla ex nihil optio aspernatur soluta molestiae animi, magnam accusamus et harum. Quia at aliquam assumenda rerum tempora?",
    by: "Rauf Yılmaz",
    backgroundImage: "/comments/comment2.jpg",
  },
  {
    id: 3,
    paragraf:
      " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    by: "Nurten Yılmaz",
    backgroundImage: "/comments/comment3.jpg",
  },
];

export const galleries = [
  {
    id: 1,
    link: "https://www.facebook.com/timberandsalt/",
    backgroundImage: "/gallery/arancini.jpg",
  },
  {
    id: 2,
    link: "https://www.instagram.com/timberandsaltrwc/",
    backgroundImage: "/gallery/double-smash-burger.jpg",
  },
  {
    id: 3,
    link: "https://www.yelp.com/biz/timber-and-salt-redwood-city",
    backgroundImage: "/gallery/interior.jpg",
  },
  {
    id: 4,
    link: "https://www.tripadvisor.com/Restaurant_Review-g32956-d8800196-Reviews-Timber_Salt-Redwood_City_California.html",
    backgroundImage: "/gallery/nashville-hot-fried-chicken.jpg",
  },
  {
    id: 5,
    link: "https://www.opentable.com/r/timber-and-salt-redwood-city",
    backgroundImage: "/gallery/smoked-chicken-salad.jpg",
  },
];
