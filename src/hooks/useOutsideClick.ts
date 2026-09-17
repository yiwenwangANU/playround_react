import { useEffect, useEffectEvent, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);
  const callbackevent = useEffectEvent(callback);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
      )
        callbackevent();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [ref]);

  return ref;
};

export default useOutsideClick;
