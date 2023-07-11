"use client";

import Image from "next/image";
import { useState } from "react";
import TechIcon from "../public/images/Toggle_Techicon.png";
import UpdatesIcon from "../public/images/Toggle_Updatesicon.png";
import MeIcon from "../public/images/Toggle_Meicon.png";
import FunIcon from "../public/images/Toggle_Funicon.png";
import FitnessIcon from "../public/images/Toggle_Fitnessicon.png";

type DivPositionType = {
  top: number;
  left: number;
};

export default function AboutSection() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);

    const buttonElement = document.getElementById(`button-${buttonIndex}`);

    if (buttonElement) {
    }

    console.log(activeButton);
  };

  return (
    <div id="section-about" className="flex flex-col items-center w-full h-screen bg-custom_dark">
      <section className="flex justify-center pb-16 pt-28 gap-14 ">
        <button
          id="button-1"
          className={`button ${
            activeButton !== 1 ? "opacity-60" : "opacity-100"
          }`}
          onClick={() => handleButtonClick(1)}
        >
          <Image src={MeIcon} alt="Me Icon" />
        </button>
        <button
          id="button-2"
          className={`button ${
            activeButton !== 2 ? "opacity-60" : "opacity-100"
          }`}
          onClick={() => handleButtonClick(2)}
        >
          <Image className="opacity-65" src={TechIcon} alt="Tech Icon" />
        </button>
        <button
          id="button-3"
          className={`button ${
            activeButton !== 3 ? "opacity-60" : "opacity-100"
          }`}
          onClick={() => handleButtonClick(3)}
        >
          <Image src={FitnessIcon} alt="FitnessIcon Icon" />
        </button>
        <button
          id="button-4"
          className={`button ${
            activeButton !== 4 ? "opacity-60" : "opacity-100"
          }`}
          onClick={() => handleButtonClick(4)}
        >
          <Image src={FunIcon} alt="Fun Icon" />
        </button>
        <button
          id="button-5"
          className={`button ${
            activeButton !== 5 ? "opacity-60" : "opacity-100"
          }`}
          onClick={() => handleButtonClick(5)}
        >
          <Image src={UpdatesIcon} alt="Updates Icon" />
        </button>
      </section>

      <section className="w-1/2 text-xl leading-10 text-center text-white font-extralight">
        {activeButton === 1 && (
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl">Who am I?</h1>

            <div className="opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              finibus dui eu magna mattis facilisis non sed arcu. In eget neque
              maximus, fringilla nibh a, blandit augue. Sed non commodo nulla.
              Aenean vel leo tincidunt, sagittis ex ut, hendrerit dolor. Fusce
              ligula dolor, lobortis eu erat eget, ultrices rutrum nisl.
              Phasellus vitae turpis sapien. 
            </div>
          </div>
        )}
        {activeButton === 2 && (
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl">What can I do?</h1>

            <div className="opacity-80">
              Phasellus fringilla ex nec lorem semper, id mollis turpis rutrum.
              Phasellus commodo bibendum ultrices. Suspendisse at facilisis sem.
              Quisque rutrum lorem vitae sem sagittis consequat. Nunc non
              tincidunt erat, quis malesuada nisi. Nam non convallis mi. Sed id
              augue tempus erat gravida tempus. Sed mollis laoreet molestie.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
              habitasse platea dictumst.
            </div>
          </div>
        )}
        {activeButton === 3 && (
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl">My Fitness</h1>

            <div className="opacity-80">
              In ornare molestie elit vel tempor. Aliquam vitae massa at elit
              dapibus consectetur. Curabitur purus lorem, tristique sit amet
              metus ut, maximus maximus turpis. Ut sagittis imperdiet lacus, sed
              facilisis nulla. Quisque interdum tellus justo. Nulla pellentesque
              massa a iaculis viverra. Praesent facilisis leo lorem, et
              vulputate libero sodales id. Proin non malesuada elit.
            </div>
          </div>
        )}
        {activeButton === 4 && (
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl">Fun</h1>

            <div className="opacity-80">
              Donec quis odio eu diam commodo aliquet quis ornare ligula. In sed
              pharetra dui. Vestibulum tincidunt ex et augue mattis imperdiet.
              Nullam ornare, felis eget ultricies elementum, felis lorem
              placerat enim, at consequat est enim sed lacus. Mauris est tortor,
              pellentesque et orci a, ultricies accumsan enim. Morbi sit amet
              posuere velit, eget aliquam erat. Morbi turpis augue, tempus vel
              ligula ac, pretium lacinia odio. Nam pulvinar tortor mauris, vitae
              feugiat ipsum rhoncus nec.
            </div>
          </div>
        )}
        {activeButton === 5 && (
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl">Recent Updates</h1>

            <div className="opacity-80">
              Duis quis facilisis purus. Praesent in magna ligula. Ut egestas
              nibh massa, in ornare ipsum volutpat eget. In hac habitasse platea
              dictumst. Suspendisse suscipit libero vitae arcu maximus mollis ac
              id mi. Quisque hendrerit volutpat lorem, vel dapibus est congue
              sit amet. Nunc faucibus sodales lorem, in maximus lorem aliquam
              eu.
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
