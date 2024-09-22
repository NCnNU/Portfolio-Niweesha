import { CardSpotlightDemo } from "./Home/cardSpotlight/page";
import { ExpandableCardDemo } from "./Home/expandableCards/page";
import { CardHoverEffectDemo } from "./Home/cardHovereffect/page";
import { CardHoverEffectDemo2 } from "./Home/cardHovereffect2/page";
import { AppleCardsCarouselDemo } from "./Home/projectCards2/page";
import { TimelineDemo } from "./Home/timeline/page";

export default function Home() {
  return (
    <div>
      <CardHoverEffectDemo2 /> 
      <ExpandableCardDemo />
      <CardHoverEffectDemo />  
      <AppleCardsCarouselDemo />
      <TimelineDemo />
      <CardSpotlightDemo />
    </div>
  );
}
