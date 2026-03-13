import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold font-[Nunito] transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-[#e5e5e5] disabled:text-[#737373]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-primary bg-transparent text-primary hover:text-primary-hover hover:border-primary-hover disabled:border-[#737373] disabled:text-[#737373]",
        ghost:
          "text-primary hover:text-primary-hover",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:  "h-10 px-4 text-base has-[>svg]:px-3",
        sm:       "h-8 px-3 text-sm has-[>svg]:px-2.5",
        lg:       "h-12 px-4 text-base has-[>svg]:px-3",
        xl:       "h-14 px-5 text-base has-[>svg]:px-4",
        icon:          "size-10",  // md icon — 40×40px
        "icon-sm":     "size-8",   // sm icon — 32×32px
        "icon-lg":     "size-12",  // lg icon — 48×48px
        "icon-xl":     "size-14",  // xl icon — 56×56px
        "icon-link-sm": "size-4",  // link icon sm — 16×16px
        "icon-link":    "size-6",  // link icon md — 24×24px
        "icon-link-lg": "size-8",  // link icon lg — 32×32px
        "icon-link-xl": "size-8",  // link icon xl — 32×32px
      },
    },
    compoundVariants: [
      // Ghost icon-only usa rounded-xl (12px) em vez de rounded-full
      {
        variant: ["ghost"],
        size: ["icon", "icon-sm", "icon-lg", "icon-xl"],
        className: "rounded-xl",
      },
      // Link icon-only sempre usa rounded-xl
      {
        variant: ["link"],
        size: ["icon-link-sm", "icon-link", "icon-link-lg", "icon-link-xl"],
        className: "rounded-xl",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
