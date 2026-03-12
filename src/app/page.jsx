import MainComponent from "./components/CardComponent";
import NavbarComponent from "./components/NavbarComponent";
import SidebarComponent from "./components/SidebarComponent";

export default function Home() {
  return (
    <>
      <section className="">
        <NavbarComponent />
        <section className="flex px-2">
          <SidebarComponent />
          <MainComponent />
        </section>
      </section>
    </>
  );
}
