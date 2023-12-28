import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export function WhyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          why?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="mb-2">Short story</DialogTitle>
          <DialogDescription>
            <p className="leading-5 [&:not(:first-child)]:mt-4">
              It started as a misspelling, but now it's become a kinda funny
              thing (at least for me).
            </p>
            <p className="leading-5 [&:not(:first-child)]:mt-4">
              In late 2022, I began counting how many times I've been called
              <span className="font-semibold">&nbsp;Mikhail</span>. I was
              surprised that people spelled my name like that.
            </p>
            <p className="leading-5 [&:not(:first-child)]:mt-4">
              My name is
              <span className="font-semibold">&nbsp;Mikalai</span>, which is the
              Belarusian equivalent of
              <span className="font-semibold">&nbsp;Nicolas</span>. That's why I
              prefer the shorthand
              <span className="font-semibold">&nbsp;Mick</span> over
              <span className="font-semibold">&nbsp;Nick</span>. I attempt to
              avoid being called
              <span className="font-semibold">&nbsp;Mikhail</span> by using the
              short name<span className="font-semibold">&nbsp;Mick</span>, but
              it doesn't work because in Slavic transliteration of English
              names,<span className="font-semibold">&nbsp;Mick</span> stands
              for... I believe you already know the answer.
            </p>
            <p className="leading-5 [&:not(:first-child)]:mt-4">
              So, I decided to create a counter. I'm not sure if I'll keep it
              for a long time, but for now, it's fun.
            </p>
            <p className="leading-5 [&:not(:first-child)]:mt-4">
              I'm planning to add some features, like admin functionality or
              some animation on counter change. We'll see.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
