import Image from "next/image";
import { cn } from "@components/lib/utils";
import { Button } from "@components/ui/button";

export default function AboutSection() {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-4 lg:pt-2 pb-10 lg:pb-20 mt-4 lg:-mt-30 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
      {/* Left Side: Image */}
      <div className="relative w-full lg:w-auto order-2 lg:order-1 flex justify-center lg:justify-start lg:-ml-15">
        {/* Blue Gradient Background */}
        <div
          className="
            absolute -top-10 -left-10 sm:-top-24 lg:top-18 lg:-left-32
            w-125 h-145 lg:w-180 lg:h-225
            bg-[radial-gradient(50%_50%_at_50%_50%,rgba(118,209,251,0.6)_0%,rgba(0,0,0,0.2)_100%)]
            rounded-full lg:rounded-lg
            z-0
           "
        />
        {/* Portrait Image */}
        <div className="relative w-100 h-125 lg:w-125 lg:h-screen z-10">
          <Image
            src="/kianna-portrait.png"
            alt="Kianna Alexandra Gragg"
            fill
            className="object-contain object-bottom z-10"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="order-1 lg:order-2 space-y-6">
        <h2 className="text-4xl lg:text-5xl font-semibold font-montserrat">
          about.<span className={blueText}>me</span>
        </h2>

        <p className={cn("text-lg font-medium", grayText)}>
          Hello, I&apos;m Kianna!
        </p>

        <p className={cn("text-lg", grayText)}>
          My journey in tech started with a simple &quot;Hello, World!&quot;,
          and I have been learning ever since. What began as curiosity has grown
          into a passion for creating meaningful and functional projects. I am
          still exploring, self-improving, and always excited to learn something
          new that can turn ideas into impact.
        </p>

        <Button
          className={cn(
            "mt-6 text-base px-6 py-2",
            "bg-sky-600 hover:bg-sky-900",
          )}
          asChild
        >
          <a
            href="/Gragg-Kianna-Alexandra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
