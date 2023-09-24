import Link from "next/link";
import { alegreya } from "../layout";
import { inter } from "../layout";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className={
        alegreya.className +
        " flex flex-col md:flex-row sm:mt-[10vh] justify-center md:justify-evenly items-center md:max-h-[1500px] md:min-h-[600px] gap-y-10 overflow-auto py-4"
      }
    >
      {/* Text */}
      <div className="flex flex-col gap-y-4 text-4xl text-center md:text-6xl md:text-left lg:text-7xl mr-2">
        <h1 className="font-bold">
          A MARRIAGE,
          <br />
          NOT A DATING, APP
        </h1>
        <p
          className={
            inter.className + " font-semibold text-base sm:text-lg 2xl:text-2xl"
          }
        >
          {" "}
          For Muslim professionals <b className="text-[#c5b385]">
            serious
          </b>{" "}
          about marriage.
        </p>
        <p className={inter.className + " text-base max-w-[420px]"}>
          Been told your standards are too high? Keep them that way. We&apos;re an
          exclusive platform for Muslim professionals only. You nailed your
          education & career — why settle for less in love?
        </p>
        <p className={inter.className + " text-base max-w-[420px]"}>
          Launching in London first on 1st Jan 2024.
        </p>
        <div>
          <Link
            href="/access"
            className={
              inter.className +
              " " +
              "bg-gold px-5 py-2 rounded-full text-lg font-bold"
            }
          >
            Get Early Access 🎁
          </Link>
        </div>
      </div>

      {/* Image */}
      <img
        src="/landing.svg"
        className="w-[200px] md:w-[300px] lg:w-[325px] 2xl:w-[375px]"
        alt="Ibrahim, Attorney at Clifford Chance, King's College London"
      />

      {/* Background div */}
      <div className="bg-[#FBFBFB] max-h-[1596px] h-screen min-h-[600px] w-screen absolute inset-0 -z-10"></div>
    </section>
  );
}

// #E9E7F6

// import { alegreya } from "../layout";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       className={
//         alegreya.className +
//         " flex justify-center items-center h-[calc(100vh-96px)] min-h-[600px] gap-y-10"
//       }
//     >
//       <div className="flex gap-x-28 items-center flex-row-reverse scale-125">
//         {/* Text */}
//         <div className="space-y-2">
//           <h1 className="text-7xl max-w-[800px]: font-bold">
//             A MARRIAGE,
//             <br /> NOT A DATING, APP
//           </h1>
//           <h2 className="text-2xl">
//             ...for Muslim professionals{" "}
//             <b className="text-[#c5b385]">serious</b> about marriage.
//           </h2>

//           {/* <h1 className="text-8xl font-bold">Marry, not date.</h1>
//           <h2 className="text-2xl">
//             A matrimony app for Muslim professionals{" "}
//             <b className="text-[#c5b385]">serious</b> about marriage.
//           </h2> */}
//         </div>

//         {/* Image */}
//         <div>
//           <Image
//             src={"/landing.svg"}
//             alt={"Muslim couple on a picnic"}
//             width={50}
//             height={50}
//             layout="responsive"
//           />
//         </div>
//       </div>

//       {/* Background div */}
//       <div className="bg-[#FBFBFB] h-screen min-h-[600px] w-screen absolute top-0 -z-10"></div>
//     </section>
//   );
// }

// // #E9E7F6
