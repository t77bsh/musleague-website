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
          inter.className +
          " text-center text-sm sm:text-base  font-semibold space-y-3"
        }
      >
        <p>
          We’re thrilled and grateful for the enthusiastic reception we’ve had!
        </p>
        <p>
          Thank you to all <Count /> of you that joined us.
        </p>
        <p>
          Due to rapid demand, we’ve had to make the tough decision to limit the
          launch to only the first 10,000 users.
        </p>
        <p>
          We’ll be giving the first 10,000 users VIP status and free lifetime
          access to any premium features we launch.
        </p>
        <p>Secure your spot on the waitlist and be among the first to join. </p>
        <p>
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
