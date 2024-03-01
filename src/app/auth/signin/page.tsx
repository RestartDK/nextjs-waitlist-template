import EmailForm from "@/components/email-form";
import MaxWidthWrapper from "@/components/maxwidthwrapper";

export default function Signin() {
  return (
    <MaxWidthWrapper>
      <main className="mx-auto flex w-full flex-col md:py-32 py-20">
        <div className="flex flex-col p-4 w-full items-center gap-4">
          <div className="shadow-md rounded-md w-full md:w-2/3 pb-8">
            <EmailForm />
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
}