import SiderBar from './Siderbar/Sidebar';

export default function Layout({ children }) {
  return (
    <section className="flex h-screen">
      <SiderBar />
      <main className="flex-1 overflow-hidden">{children}</main>
    </section>
  );
}
