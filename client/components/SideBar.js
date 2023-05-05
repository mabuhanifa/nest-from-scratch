import Link from "next/link";
import { Router } from "next/router";
import { BsCalendar2Check } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { RxHome } from "react-icons/rx";
import { TiContacts } from "react-icons/ti";

export default function SideBar() {
  const sidebarItems = [
    {
      name: "All",
      href: "/",
      icon: RxHome,
    },
    {
      name: "Today",
      href: "/today",
      icon: CiCalendarDate,
    },
    {
      name: "Scheduled",
      href: "/scheduled",
      icon: TiContacts,
    },

    {
      name: "Finished",
      href: "/finished",
      icon: BsCalendar2Check,
    },
  ];
  const router = Router;
  return (
    <div>
      <ul className="sidebar__list">
        {sidebarItems.map(({ name, href, icon: Icon }) => {
          return (
            <li className="sidebar__item" key={name}>
              <Link
                className={`sidebar__link ${
                  router.pathname === href ? "sidebar__link--active" : ""
                }`}
                href={href}
              >
                <span className="sidebar__icon">
                  <Icon />
                </span>
                <span className="sidebar__name">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
