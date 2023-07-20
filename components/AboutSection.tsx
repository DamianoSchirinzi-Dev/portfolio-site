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
      <SkillsMarquee />
      <ul
        role="list"
        className="flex flex-col items-center justify-between pb-16 divide-y divide-gray-400 md:py-20"
      >
        <AboutMeBlock
          header="Who am I?"
          body1="I'm a passionate Full Stack Software Developer experienced in Web, Games, and Blockchain development. With a drive for continuous learning and a deep-rooted passion for the tech industry, I constantly expand my skills to stay ahead."
          body2="From crafting innovative solutions to implementing robust backend systems, I strive to create seamless and engaging digital experiences. With a diverse skill set, I can tackle complex challenges confidently, whether it's building scalable web applications, creating immersive gaming experiences, or exploring the potential of blockchain technology."
          isTopHeading={true}
        />
        <AboutMeBlock
          header={header2}
          body1="I possess a wide range of technical skills and expertise that enable me to deliver exceptional software solutions. I am proficient in languages such as C#, JavaScript, and TypeScript, allowing me to develop robust and scalable applications. I have hands-on experience with popular frameworks like .NET, React, and Next.js, which empower me to create dynamic and user-friendly web experiences."
          body2="Additionally, I am well-versed in technologies such as Docker and have a solid understanding of CI/CD tools.        My skill set extends beyond development to include working with a variety of CMS platforms, following Agile workflows, and applying SOLID principles for efficient and maintainable code. With a strong focus on continuous learning, I stay up-to-date with industry trends and strive to deliver high-quality results. With this comprehensive expertise, I am well-equipped to tackle diverse projects and contribute effectively to software development initiatives."
        />
        <AboutMeBlock
          header={header4}
          body1="I have just accepted a new job as a Full Stack Developer! The job involves working on cloud-based contact centre software using technologies such as Vue, Typescript, C# and Java!"
          body2="Also, I have recently decided to get back into MMA! I will update accordingly!"
          isLastHeading={true}
        />
      </ul>
    </div>
  );
}
