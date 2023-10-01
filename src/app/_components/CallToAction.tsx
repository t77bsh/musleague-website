import AppStoresTags from "./AppStoresTags";
import Form from "./Form";
import { alegreya } from "../layout";
import Image from "next/image";
export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="my-[7vh] flex flex-col gap-y-14 items-center md:items-start md:flex-row-reverse md:gap-x-12"
    >
      <div className="w-full  flex flex-col gap-y-12 md:mt-20">
        <div className="space-y-3">
          <p className={alegreya.className + " font-medium text-lg text-gray-800 md:text-2xl lg:text-3xl"}>
            You nailed your education & career — why settle for less in love?
          </p>

          <Form />
        </div>
        <AppStoresTags />
      </div>

      <img
        src="/landing.png"
        className="w-[250px] md:w-[200px] xl:w-[225px]"
        alt="Ibrahim, Attorney at Clifford Chance, King's College London"
      />
    </section>
  );
}
