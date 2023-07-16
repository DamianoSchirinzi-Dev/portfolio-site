import Image from "next/image";
import Decal from "../public/images/path.png";
import { SkillsBlockProps } from "@/types/Types";

export default function SkillsBlock(props: SkillsBlockProps) {
  return (
    <div className="flex flex-col slide">
      <Image src={Decal} alt="decal" />
      <div>{props.skillsName}</div>
    </div>
  );
}
