export default function IntroWithCta() {
  return (
    <div className="absolute flex flex-col items-end gap-4 pr-48">
      <h1 className="text-5xl">
        Hi,<div> </div> I'm{" "}
        <strong className="text-custom_highlight">Damiano Schirinzi</strong>
      </h1>
      <h2 className="text-2xl">I am a software developer.</h2>
      <button className="w-1/3 px-2 py-3 my-2 text-xl text-white rounded-md bg-custom_highlight">
        See my work
      </button>
    </div>
  );
}
