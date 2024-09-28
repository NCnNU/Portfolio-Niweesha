import CardSpotlightDemo from "./Home/cardSpotlight/page";
import ExpandableCardDemo from "./Home/expandableCards/page";
import CardHoverEffectDemo from "./Home/cardHovereffect/page";

import AppleCardsCarouselDemo from "./Home/projectCards2/page";
import TimelineDemo from "./Home/timeline/page";
import SignupFormDemo from "./Home/SignupForm/page";
import FloatingDockDemo from "./Home/floatingDock/page";
import BackgroundBeamsWithCollisionDemo from "./Home/backgroundBeam/page";
import { NavbarDemo } from "./Home/navBar/page";
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <BackgroundBeamsWithCollisionDemo id="home" />
      <CardSpotlightDemo id="cardSpotlight" />
      <TimelineDemo id="project" />
      <CardHoverEffectDemo id="what-i-offer" />
      <AppleCardsCarouselDemo id="my-publications" />
      <ExpandableCardDemo id="achievements-certifications" />
      <SignupFormDemo id="contact-me" />
      <FloatingDockDemo id="Links"/>
    </>
  );
}
