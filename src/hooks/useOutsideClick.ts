import { useEffect, useEffectEvent, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const callbackEvent = useEffectEvent(callback);
  const ref = useRef<T>(null);
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      )
        callbackEvent();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [ref]);

  return ref;
};

export default useOutsideClick;
