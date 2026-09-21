import { useEffect, useEffectEvent, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);
  const callbackEvent = useEffectEvent(callback);
  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
      )
        callbackEvent();
    };

    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, []);
  return ref;
};

export default useOutsideClick;
