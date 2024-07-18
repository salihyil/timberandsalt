import Image from "next/image";

type Props = {};

const PromoSection = (props: Props) => {
  return (
    <section className="pb-[100px] pt-[140px]">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-[60px] max-w-[50%] text-center">
          <Image src={"/icon-img.png"} alt="icon" width={150} height={150} />
        </div>
        <h3 className="mt-8 max-w-[570px] text-center text-[28px] text-white">
          <span className="font-cinzel uppercase leading-[1.3em] tracking-[.12em]">
            Timber & Salt is for everyone who collects beautiful moments
          </span>
        </h3>
        <div className="mx-[10px] pt-[25px] text-[55px] leading-[39px] text-[#C49871]">
          <span className="font-mrsSaintDelafield">For the best memories</span>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
