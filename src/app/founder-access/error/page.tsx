import Image from "next/image";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

type FounderAccessErrorPageProps = {
  searchParams?: Promise<{
    reason?: string;
  }>;
};

export default async function FounderAccessErrorPage({ searchParams }: FounderAccessErrorPageProps) {
  const params = await searchParams;
  const isMissing = params?.reason === "missing";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f5ef] px-4 py-12 text-[#172033]">
      <section className="w-full max-w-xl rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm sm:p-8">
        <Image alt="The Program Suite" className="mx-auto h-10 w-auto object-contain" height={48} priority src="/logo.png" width={190} />
        <AlertTriangle aria-hidden="true" className="mx-auto mt-8 size-12 text-[#b28a2e]" />
        <h1 className="mt-5 text-3xl font-black">Founder request was not sent.</h1>
        <p className="mt-3 leading-7 text-[#667085]">
          {isMissing
            ? "Please complete every required field and try again."
            : "Email delivery is not configured yet. Please email founders@theprogramsuite.com directly."}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#b28a2e] px-4 py-2 font-black text-white hover:bg-[#967224]" href="/#founder-access">
            Try Again
          </Link>
          <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-black/15 px-4 py-2 font-bold hover:border-[#b28a2e]" href="mailto:founders@theprogramsuite.com">
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
