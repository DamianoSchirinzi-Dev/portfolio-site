export default function IntroWithCta() {
  return (
    <div className="flex flex-col items-start w-2/5 gap-5 pt-20 mr-32">
      <h2 className="text-4xl">Hello, i'm </h2>
      <h1 className="font-serif text-6xl font-light">Damiano Schirinzi</h1>
      <h2 className="pt-6 text-xl">
        I am a
        <strong className="text-custom_highlight"> Software developer</strong>{" "}
        with a passion for all things digitial and creative.
      </h2>
      <button className="px-5 py-3 text-xl font-bold text-white rounded-full mt-7 bg-custom_highlight">
        See my work
      </button>
    </div>
  );
}
