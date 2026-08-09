import { Code2, Copyright } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-base-300/80 bg-base-200/90 px-5 py-6 text-sm text-base-content/70 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
        <div className="flex items-center gap-2">
          <Code2 size={17} strokeWidth={1.8} className="text-primary" aria-hidden="true" />
          <span>
            Développé par <Link href="https://aarontech.axium.cc" target="_blank" rel="noopener noreferrer"><span className="font-semibold text-base-content">AaronTech</span></Link>
          </span>
        </div>
        <span className="hidden h-4 w-px bg-base-content/20 sm:block" aria-hidden="true" />
        <div className="flex items-center gap-2">
          <Copyright size={16} strokeWidth={1.8} className="text-secondary" aria-hidden="true" />
          <Link href="https://axium.cc" target="_blank" rel="noopener noreferrer">
          <span className="font-semibold text-base-content">AXIUM</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;