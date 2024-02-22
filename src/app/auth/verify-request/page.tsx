import MaxWidthWrapper from "@/components/maxwidithwrapper";

export default function VerifyRequest() {
  return (
    <MaxWidthWrapper>
      <main className="mx-auto flex w-full flex-col">
        <div className="h-screen flex flex-col p-4 w-full items-center justify-center gap-4">
          <div className="shadow-md rounded-md w-full p-4 md:w-2/3">
            <div className="flex flex-col text-xl font-bold text-center items-center gap-4">
              <p>
                Check your email for a magic link to log in
              </p>
              <p>
                After you have joined the waitlist 🥳
              </p>
            </div>
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  )
}