import CardSpotlightDemo from "./Home/cardSpotlight/page";
import ExpandableCardDemo from "./Home/expandableCards/page";
import CardHoverEffectDemo from "./Home/cardHovereffect/page";

import AppleCardsCarouselDemo from "./Home/projectCards2/page";
import TimelineDemo from "./Home/timeline/page";
import SignupFormDemo from "./Home/SignupForm/page";

import FloatingDockDemo from "./Home/floatingDock/page";
import BackgroundBeamsWithCollisionDemo from "./Home/backgroundBeam/page";
export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollisionDemo />
   
      <CardSpotlightDemo />
      <ExpandableCardDemo />
      <CardHoverEffectDemo />
      <AppleCardsCarouselDemo />
      <TimelineDemo />
      <SignupFormDemo />
      <FloatingDockDemo />
    </>
  );
}
