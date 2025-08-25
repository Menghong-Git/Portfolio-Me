
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Send} from "lucide-react";
import DarkModeSwitch from "./switch";

function Footerdemo() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-6 text-muted-foreground">
              I'm always open to new opportunities, collaborations, or just a
              friendly chat. If you’d like to get in touch, feel free to reach
              out through email or connect with me on GitHub and LinkedIn. I’ll
              be happy to respond!
            </p>
            <form className="relative">
              <Input
                type="Message"
                placeholder="Enter your Message"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-black text-primary-foreground transition-transform hover:scale-105 "
              >
                <Send className="h-4 w-4 text-black   " />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="/"
                className="block transition-colors hover:text-primary !text-black dark:!text-white "
              >
                Home
              </a>
              <a
                href="/About"
                className="block transition-colors hover:text-primary !text-black dark:!text-white"
              >
                About Me
              </a>
              <a
                href="/Experience"
                className="block transition-colors hover:text-primary !text-black dark:!text-white"
              >
                Experience
              </a>
              <a
                href="/MyResume"
                className="block transition-colors hover:text-primary !text-black dark:!text-white"
              >
                Resume
              </a>
              <a
                href="https://t.me/+85586623507"
                className="block transition-colors hover:text-primary !text-black dark:!text-white"
              >
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Address</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>No. 45A, Songkat Krangthnong,</p>
              <p>Khan SenSok,</p>
              <p>City, Phnom Penh,</p>
              <p>Phone: (+855 ) 86 623 507</p>
              <p>Email: penmenghong99@gmail.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.facebook.com/share/1EEeL9TCFs/">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Facebook className="h-4 w-4 !text-black" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Send className="h-4 w-4 !text-black" />
                        <span className="sr-only">Telegram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contact us on Telegram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.instagram.com/poki_copy?igsh=MWRwMGVuZzNlNzNzMA==">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Instagram className="h-4 w-4 !text-black" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.linkedin.com/in/pen-menghong-301b71341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Linkedin className="h-4 w-4 !text-black" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center  space-x-2">
              <DarkModeSwitch />
              
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © Portfolio. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a
              href="#"
              className="transition-colors hover:text-primary !text-black dark:!text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-primary !text-black dark:!text-white"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footerdemo;
