import AboutMeBlock from "./AboutMeBlock";
import SkillsMarquee from "./SkillsMarquee";
import instagram from "../public/images/instagram.png";
import Github from "../public/images/github.png";
import linkedIn from "../public/images/linkedin.png";

export default function AboutSection() {
  const header2 = [
    "What do ",
    <strong className="text-custom_highlight">I know?</strong>,
  ];
  const header3 = [
    "Personal  ",
    <strong className="text-custom_highlight">Life?</strong>,
  ];
  const header4 = [
    "Recent ",
    <strong className="text-custom_highlight">Updates?</strong>,
  ];

  return (
    <div id="section-about" className="bg-custom_light">
      <ul
        role="list"
        className="flex flex-col items-center justify-between pt-4 pb-16 divide-y divide-gray-400 md:py-20"
      >
        <AboutMeBlock
          imageSrc={instagram.src}
          header="Who am I?"
          body="Donec ipsum nulla, malesuada id ex eget, luctus iaculis elit. Aliquam eleifend aliquam mi at ornare. Fusce eu massa mauris. Phasellus facilisis odio ac ante gravida, nec hendrerit lorem porta. Donec sagittis hendrerit vehicula. Ut euismod id risus eu fermentum. Cras sem magna, varius sed felis quis, porttitor volutpat est. "
          isTopHeading={true}
        />
        <AboutMeBlock
          imageSrc={instagram.src}
          header={header2}
          body="Donec ipsum nulla, malesuada id ex eget, luctus iaculis elit. Aliquam eleifend aliquam mi at ornare. Fusce eu massa mauris. Phasellus facilisis odio ac ante gravida, nec hendrerit lorem porta. Donec sagittis hendrerit vehicula. Ut euismod id risus eu fermentum. Cras sem magna, varius sed felis quis, porttitor volutpat est. "
        />
        <AboutMeBlock
          imageSrc={instagram.src}
          header={header4}
          body="Donec ipsum nulla, malesuada id ex eget, luctus iaculis elit. Aliquam eleifend aliquam mi at ornare. Fusce eu massa mauris. Phasellus facilisis odio ac ante gravida, nec hendrerit lorem porta. Donec sagittis hendrerit vehicula. Ut euismod id risus eu fermentum. Cras sem magna, varius sed felis quis, porttitor volutpat est. "
          isLastHeading={true}
      />
      </ul>
      
      <SkillsMarquee/>
    
    </div>
  );
}
