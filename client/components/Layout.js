export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="">{children}</main>;
    </div>
  );
}
