import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://raw.githubusercontent.com/simtropolis/www/refs/heads/main/public/simtropolis.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
           AI-driven and secured collaboration, built for operational teams.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Build internal {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              apps & agents
            </code>
            to automate your business operations.
          </li>
          <li className="tracking-[-.01em]">
            Optimised for enterprise generative AI. Advanced search, discovery and retrieval.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Coming soon
          </a>
          {/* <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </a> */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://raw.githubusercontent.com/simtropolis/www/refs/heads/main/public/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Collaboration
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://raw.githubusercontent.com/simtropolis/www/refs/heads/main/public/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Agents
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://raw.githubusercontent.com/simtropolis/www/refs/heads/main/public/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Apps
        </a>
      </footer>
    </div>
  );
}
