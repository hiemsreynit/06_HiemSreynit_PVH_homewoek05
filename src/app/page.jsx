import MainComponent from "../components/MainComponent";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-y-3">
        <NavbarComponent />
        <section className="flex px-2 gap-x-4">
          <SidebarComponent />
          <MainComponent />
        </section>
      </section>
    </>
  );
}
