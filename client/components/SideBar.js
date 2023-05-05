export default function SideBar() {
  const sidebarItems = [
    {
      name: "Home",
      href: "/",
      icon: AiOutlineHome,
    },
    {
      name: "About",
      href: "/about",
      icon: BsPeople,
    },
    {
      name: "Mails",
      href: "/mails",
      icon: FiMail,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: TiContacts,
    },
  ];
  return <div>SideBar</div>;
}
