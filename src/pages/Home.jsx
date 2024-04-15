/* eslint-disable react/no-unescaped-entities */
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <hr className="w-full border-gray-200 sm:mx-auto my-2" />
      <div className="mx-auto flex flex-col justify-evenly items-center px-4 py-16 h-full space-y-7 max-w-2xl">
        <h1 className="md:text-4xl text-3xl font-bold text-center">
          Please verify your email...
        </h1>
        <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="6x" color="pink" />

        <p className="font-bold">account@refero.design</p>
        <p>
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p>
          Please verify your email address. We've sent a confirmation email to:
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <span className="text-pink-500">resend the confirmation email.</span>
        </p>
        <p>Wrong email address? Change it.</p>
      </div>
    </div>
  );
}
