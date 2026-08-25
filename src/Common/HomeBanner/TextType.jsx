import React, { useEffect, useRef, useState } from "react";

import "./TextType.scss";

/*
 * TextType
 * --------
 * A simplified, dependency-free version of React Bits' TextType component
 * (https://reactbits.dev). The original uses gsap purely to blink the
 * cursor — this version handles the blink with a plain CSS animation
 * instead, so no extra animation library needs to be pulled into the
 * project just for a blinking "|". By default the text types in, pauses,
 * deletes itself, and retypes — looping forever (set `loop={false}` to
 * type once and stop).
 */
export default function TextType({
  text,
  as: Component = "span",
  typingSpeed = 55,
  initialDelay = 250,
  showCursor = true,
  cursorCharacter = "|",
  hideCursorOnComplete = true,
  className = "",
  onComplete,
  // Looping options: once the text finishes typing, it pauses, deletes
  // itself, pauses again, then retypes — repeating forever by default.
  loop = true,
  pauseDuration = 2000,
  deletingSpeed = 30,
  deletingPauseDuration = 500,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    let timeoutId;
    indexRef.current = 0;
    setDisplayedText("");
    setIsDone(false);

    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        indexRef.current += 1;
        setDisplayedText(text.slice(0, indexRef.current));
        timeoutId = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsDone(true);
        onCompleteRef.current?.();

        if (loop) {
          timeoutId = setTimeout(deleteNextChar, pauseDuration);
        }
      }
    };

    const deleteNextChar = () => {
      if (indexRef.current > 0) {
        indexRef.current -= 1;
        setDisplayedText(text.slice(0, indexRef.current));
        timeoutId = setTimeout(deleteNextChar, deletingSpeed);
      } else {
        setIsDone(false);
        timeoutId = setTimeout(typeNextChar, deletingPauseDuration);
      }
    };

    timeoutId = setTimeout(typeNextChar, initialDelay);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    text,
    typingSpeed,
    initialDelay,
    loop,
    pauseDuration,
    deletingSpeed,
    deletingPauseDuration,
  ]);

  const shouldShowCursor = showCursor && (!hideCursorOnComplete || !isDone || loop);

  return (
    <Component className={`text-type ${className}`}>
      <span className="text-type__content">{displayedText}</span>
      {shouldShowCursor && (
        <span className="text-type__cursor" aria-hidden="true">
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
}