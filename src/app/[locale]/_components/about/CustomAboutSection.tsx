import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface CustomAboutSectionProps {
  title: string;
  paragraphs: string[];
  imgSrc1?: string;
  imgSrc2?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function CustomAboutSection({
  title,
  paragraphs,
  imgSrc1,
  imgSrc2,
  imageAlt = "About Image",
  children,
}: CustomAboutSectionProps) {
  const hasImages = !!imgSrc1 || !!imgSrc2;
  const hasTwoImages = !!imgSrc1 && !!imgSrc2;
  const hasOneImage = !!imgSrc1 && !imgSrc2;
  const t = useTranslations("aboutUs.about");

  return (
    <section className="py-16 lg:py-24 bg-[url('/assets/images/whoweare/bg.svg')] bg-no-repeat bg-cover">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Section - Left Side */}
          {hasImages && (
            <div className="lg:col-span-4 order-2 lg:order-2 relative">
              {hasTwoImages ? (
                <div className="w-full aspect-1/2 sm:aspect-250/545 max-w-[250px] mx-auto lg:mx-0">
                  {/* Base Image */}
                  {imgSrc1 && (
                    <Image
                      src={imgSrc1}
                      alt={imageAlt}
                      width={300}
                      height={300}
                      className="object-cover w-[250px] h-full absolute left-0"
                      priority
                    />
                  )}
                  {/* Green Overlay */}
                  <div className="absolute left-0 top-0 w-[250px] h-full bg-[#306e57] mix-blend-overlay" />
                  {imgSrc2 && (
                    <Image
                      src={imgSrc2}
                      alt={imageAlt}
                      width={400}
                      height={300}
                      className="object-cover w-[250px] h-full scale-110 absolute right-0 bottom-[27px]"
                      priority
                    />
                  )}
                </div>
              ) : (
                <div className={cn("w-full max-w-[400px] mx-auto lg:mx-0 relative aspect-3/4", hasOneImage && "aspect-40/44")}>
                  {imgSrc1 && (
                    <Image
                      src={imgSrc1}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                  {imgSrc2 && !imgSrc1 && (
                    <Image
                      src={imgSrc2}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              )}
            </div>
          )}

          {/* Text Content - Right Side */}
          <div
            className={cn(
              "order-1 lg:order-1",
              hasImages ? "lg:col-span-8" : "col-span-1 lg:col-span-12"
            )}
          >
            {/* text-[#1b4332] */}
            <h2 className="title text-3xl lg:text-[36px] font-bold mb-6 lg:mb-8 leading-normal">
              {title}
            </h2>

            <div className="space-y-1">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg lg:text-[30px] lg:leading-[1.4] text-[#1B4332]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </Container>
    </section>
  );
}

