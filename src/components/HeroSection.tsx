import Image from "next/image";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { cn } from "@components/lib/utils";

type SocialLink = {
  icon: React.ElementType;
  href: string;
};

const SocialLinks: SocialLink[] = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/kiannagragg/" },
  { icon: FaGithub, href: "https://github.com/kiannagragg" },
  { icon: FaDiscord, href: "https://discordapp.com/users/758096224921452576" },
];

export default function HeroSection() {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  return (
    <section className="relative min-h-screen bg-black flex justify-center">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="
        absolute bottom-0 right-0
        w-screen h-screen
        sm:w-[75vw] sm:h-[120vh]
        lg:w-[65vw] lg:h-[125vh]
        translate-y-1/2 sm:translate-y-1/3 lg:translate-y-1/2
        lg:translate-x-1/8
        bg-[radial-gradient(50%_50%_at_50%_50%,rgba(118,209,251,0.6)_0%,rgba(0,0,0,0.6)_100%)]
        "
        />
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 sm:gap-6 lg:gap-45
                  w-full max-w-7xl px-4 sm:px-6 lg:px-10"
      >
        {/* Left Side: Text Content */}
        <div className="z-10 py-4 sm:py-12 lg:py-40 order-1">
          <p
            className={cn(
              "text-base sm:text-lg lg:text-xl font-medium mb-3 sm:mb-4 font-montserrat",
              grayText,
            )}
          >
            Hello! I am
          </p>

          <h1 className="font-semibold leading-none tracking-tight font-heading">
            <span className="block whitespace-nowrap text-[clamp(2.25rem,5vw,4.5rem)] text-white mb-2 sm:mb-3">
              Kianna Alexandra
            </span>

            <span
              className={cn(
                "block text-5xl sm:text-6xl lg:text-9xl overflow-hidden border-r-2 border-sky-300 animate-typing leading-[1.15]",
                blueText,
              )}
            >
              Gragg
            </span>
          </h1>

          <p
            className={cn(
              "mt-6 sm:mt-8 lg:mt-8 text-base sm:text-lg lg:text-xl font-medium max-w-lg font-montserrat",
              grayText,
            )}
          >
            I love building things that make people&apos;s lives easier and
            smarter. Whether it is solving problems or designing something new,
            I am all about creating with purpose.
          </p>

          {/* Social Icons */}
          <div className="mt-6 sm:mt-10 lg:mt-12 flex space-x-4 sm:space-x-6">
            {SocialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg",
                  "transition-all duration-200 ease-in-out",
                  blueText,
                  "hover:scale-110",
                )}
              >
                <link.icon className="w-60 h-60 sm:w-60 sm:h-60" />
              </a>
            ))}
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="relative w-full h-90 sm:h-98 lg:h-screen order-2 flex items-end">
          <div className="relative w-full h-full">
            <Image
              src="/kianna-portrait.png"
              alt="Kianna Alexandra Gragg"
              fill
              className="object-contain object-bottom lg:scale-100"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
