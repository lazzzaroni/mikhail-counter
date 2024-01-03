import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import { WhyDialog } from "./why-dialog";

export default function Footer() {
  return (
    <footer className="flex text-sm text-muted-foreground ">
      <WhyDialog />
      <div className="ml-auto flex items-center justify-end gap-4 md:px-2">
        <Link
          to="https://github.com/lazzzaroni"
          target="_blank"
          rel="noopener noreferrer"
          className="size-auto transition-colors duration-300 hover:text-foreground hover:underline"
        >
          <GitHubLogoIcon className="size-5" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/mpaliakou/"
          target="_blank"
          rel="noopener noreferrer"
          className="size-auto transition-colors duration-300 hover:text-foreground hover:underline"
        >
          <LinkedInLogoIcon className="size-5" />
        </Link>
        <Link
          to="mailto:mpaliakou.dev@gmail.com"
          target="_self"
          className="size-auto transition-colors duration-300 hover:text-foreground hover:underline"
        >
          <EnvelopeClosedIcon className="size-5" />
        </Link>
      </div>
    </footer>
  );
}
