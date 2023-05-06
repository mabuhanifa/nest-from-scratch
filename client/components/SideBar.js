import Link from "next/link";
import { useRouter } from "next/router";
import { CiBoxList, CiCalendar, CiCalendarDate, CiHome } from "react-icons/ci";

export default function SideBar() {
  const sidebarItems = [
    {
      name: "All",
      href: "/",
      icon: CiHome,
    },
    {
      name: "Today",
      href: "/today",
      icon: CiCalendarDate,
    },
    {
      name: "Scheduled",
      href: "/scheduled",
      icon: CiBoxList,
    },

    {
      name: "Completed",
      href: "/finished",
      icon: CiCalendar,
    },
  ];
  const { asPath } = useRouter();
  return (
    <div className="shad my-5 rounded-md h-min">
      <ul className="">
        {sidebarItems.map(({ name, href, icon: Icon }) => {
          return (
            <li
              key={name}
              className={
                asPath === href
                  ? "font-[500] text-gray-900 bg-gray-200 pr-20 border-b"
                  : "pr-20 border-b"
              }
            >
              <Link href={href}>
                <span className="text-2xl">
                  <Icon className="inline mx-5 my-5" />
                </span>
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
