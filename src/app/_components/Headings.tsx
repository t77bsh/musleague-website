import { alegreya } from "../layout";

export default function Headings() {
  return (
    <section id="headings" className={alegreya.className + " " + "mt-[4vh]"}>
      {/* Headlines */}
      <div className="flex flex-col gap-y-1 sm:gap-y-4 font-semibold">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          A marriage, not a dating, app.
        </h1>
        <p className={"sm:text-lg md:text-xl lg:text-2xl"}>
          ...for Muslim professionals <b className="text-[#c5b385]">serious</b>{" "}
          about marriage.
        </p>
      </div>
    </section>
  );
}
