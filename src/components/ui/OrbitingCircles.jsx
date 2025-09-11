import { cn } from "@/lib/utils";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 100,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  const count = React.Children.count(children) || 0;
  // expand radius slightly when many items to avoid overlap
  const effectiveRadius = radius + Math.max(0, (count - 6)) * 12;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (count > 0 ? (360 / count) * index : 0);
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": effectiveRadius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              }
            }
            className={cn(
              `absolute left-[50%] top-[50%] flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className,
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
