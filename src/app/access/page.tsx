import { inter } from "../layout";
import Countdown from "./_components/Countdown";
import WaitlistCount from "./_components/WaitlistCount";
import Form from "./_components/Form";
import Count from "./_components/Count";
import RemainingCount from "./_components/RemainingCount";

function page() {
  return (
    <div
      className={
        inter.className +
        " " +
        "flex flex-col items-center min-h-screen justify-center gap-y-6 p-4"
      }
    >
      <h1
        className={
          "text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl text-center font-bold"
        }
      >
        We’re launching in London soon in...
      </h1>

      {/* Countdown */}
      <Countdown />

      {/* Copy */}
      <div
        className={
          inter.className + " text-center text-sm sm:text-base  space-y-3"
        }
      >
        <p>
          Thank you to all <Count /> of you that have joined us already! Due to
          high demand, we've had to cap the launch at 5,000 users, but we will
          be giving each one of you VIP status and free lifetime premium
          features!
        </p>
        <p className="font-semibold">
          <RemainingCount /> spots remaining.{" "}
        </p>
      </div>

      {/* Join waitlist form */}
      <Form />

      {/* Waitlist count */}
      <WaitlistCount />
    </div>
  );
}

export default page;
