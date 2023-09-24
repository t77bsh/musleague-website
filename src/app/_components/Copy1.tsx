import { alegreya } from "../layout";
import Image1 from "./Image1";

export default function Copy1() {
  return (
    <section className="h-screen min-h-[600px] justify-center flex flex-col gap-y-10">
      <h1 className={alegreya.className + " text-5xl text-center"}>
        You nailed your education & career — why settle for less in love?
      </h1>
      <div className="flex justify-between items-center">
        <div className="space-y-4 w-[600px]">
          <p>
            Muslim professionals are exceling in education and careers, yet
            finding a partner that matches your mindset and intellect remains a
            challenge.
          </p>
          <p>
            Especially for Muslim women, who are statistically more educated and
            in higher-paying professions than Muslim men.
          </p>
          <p></p>
          <p>We exist to change that.</p>
        </div>
        <Image1 />
      </div>
      {/* <p>
        We've tried the existing apps. We've seen it all. People that can't
        spell, people from back home with incompatible mindsets, people that are
        already married, people that just want to hook up and the "entrepreneur"
        or "director" of your local chicken shop.
      </p>

      <p>
        We're unapologetically selective — not anyone and everyone can join. An
        application and vetting process is in place to ensure a high-quality
        experience for everyone!
      </p> */}
    </section>
  );
}
