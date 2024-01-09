import SiderBar from './Siderbar/Sidebar';

export default function Layout({ children }) {
  return (
    <section className="flex gap-0">
      <SiderBar />
      <main className="flex-1">{children}</main>
    </section>
  );
}
