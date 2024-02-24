import EmailForm from "@/components/email-form";
import MaxWidthWrapper from "@/components/maxwidthwrapper";

export default function Signin() {
  return (
    <MaxWidthWrapper>
      <main className="mx-auto flex w-full flex-col">
        <div className="flex flex-col p-4 w-full items-center gap-4">
          <h1 className="text-2xl font-bold ">Join the Waitlist</h1>
          <div className="shadow-md rounded-md w-full  p-4 md:w-2/3">
            <EmailForm />
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
}