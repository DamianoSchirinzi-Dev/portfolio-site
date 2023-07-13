export default function IntroWithCta() {
  return (
    <div className="flex flex-col items-center w-3/5 gap-5 pt-16 text-center md:items-start md:text-left md:w-1/3">
      <h2 className="text-3xl">Hello, i'm </h2>
      <h1 className="font-serif text-5xl font-light">Damiano Schirinzi</h1>
      <h2 className="pt-4 text-xl">
        I am a
        <strong className="text-custom_highlight"> Software developer </strong>
        with a passion for all things digitial and creative.
      </h2>
      <button className="w-4/5 px-5 py-3 text-xl font-bold text-center text-white rounded-full mt-7 bg-custom_highlight sm:w-3/5 md:w-4/5 lg:w-3/6">
        See my work
      </button>
    </div>
  );
}
