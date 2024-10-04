import NavbarDemo from "./homee/navBar/page";
import Hero from "./homee/backgroundBe/page";
import Teach from "./homee/cardSpotlight/page";
import Projects from "./homee/timeline/page";
import Offer from "./homee/cardHovereffect/page";
import Publications from "./homee/projectCards2/page";
import Achive from "./homee/expandableCards/page";
import Contact from "./homee/SignupForm/page";
import Social from "./homee/floatingDock/page";
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
