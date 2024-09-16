import { LinkdinIcon } from "@repo/ui/linkdinIcon"
import { GithubIcon } from "@repo/ui/githubIcon";

export function Footer() {
  return (
    <div className="border-t-2 border-zinc-400 text-white">
      <div className="p-6 sm:p-12 md:p-16 lg:px-44 flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className=" text-center lg:text-left">
          <div className=" text-2xl sm:text-3xl md:text-4xl font-bold">
            Remimo
          </div>

          <div className="text-xs sm:text-sm mt-2">
            A product by <a href="https://github.com/mynk2611" className="relative text-cyan-500 dark:text-cyan-500">Mayank Mehta</a>
          </div>

          <div className="text-xs sm:text-sm mt-1">
            Building in public <a href="https://x.com/mame_2611" className="relative text-cyan-500 dark:text-cyan-500">@mame_2611</a>
          </div>
        </div>

        <div className="relative flex mt-4 lg:mt-0 space-x-4">
          <a href="https://github.com/mynk2611/remimo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mayank-mehta-91754426b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkdinIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

