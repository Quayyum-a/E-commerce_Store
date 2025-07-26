import FooterLinksSection from "./FooterLinkSection";
import FooterSocials from "./FooterSocials";
import Subscribe from "../components/Subscribe";

const Footer = () => {
  return (
    <div className="relative mt-40">
  
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 ">
        <Subscribe />
      </div>

      <footer className="bg-stone-300 text-black text-sm px-12 pt-32">
        <div className="flex flex-wrap justify-between gap-8 px-6 py-10">
          <FooterLinksSection />
        </div>

        <div className="flex flex-wrap justify-between items-start px-6 py-6 border-t border-stone-600 gap-8">
          <FooterSocials />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
