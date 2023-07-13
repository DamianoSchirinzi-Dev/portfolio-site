import Decal from '../public/images/path.png'
import Image from 'next/image'

export default function SkillsMarquee() {
  return (
    <div className="container px-4 pb-10 mx-auto sm:px-12 text-custom_dark_2">
       <div className="slider">
        <div className="flex gap-16 text-lg slide-track">
          <div className="slide">Tailwind</div>
          <div className="slide">React.js</div>
          <div className="slide">Next.js</div>
          <div className="slide">Vue.js</div>
          <div className=" slide">Javascript</div>
          <div className=" slide">Typescript</div>
          <div className=" slide">Python</div>
          <div className=" slide">HTML</div>
          <div className=" slide">CSS</div>
          <div className="slide">GIT</div>
          {/* same 9 slides doubled (duplicate) */}
          <div className=" slide">C#</div>
          <div className=" slide">.NET</div>
          <div className=" slide">.NET CORE</div>
          <div className=" slide">Docker</div>
          <div className=" slide">Azure DevOps</div>
          <div className=" slide">AWS</div>
          <div className=" slide">Kubernetes</div>
          <div className=" slide">Java</div>
          <div className=" slide">Optimizely</div>
          <div className=" slide">Communication</div>
        </div>
      </div>

     
    </div>
  );
}
