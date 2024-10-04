import NavbarDemo from "./home/navBar/page";
import Hero from "./home/backgroundBe/page";
import Teach from "./home/cardSpotlight/page";
import Projects from "./home/timeline/page";
import Offer from "./home/cardHovereffect/page";
import Publications from "./home/projectCards2/page";
import Achive from "./home/expandableCards/page";
import Contact from "./home/SignupForm/page";
import Social from "./home/floatingDock/page";
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Teach />
      <Projects />
      <Offer />
      <Publications />
      <Achive />
      <Contact />
      <Social />
    </>
  );
}
