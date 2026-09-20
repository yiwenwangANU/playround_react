import { useEffect, useEffectEvent, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  const handlePointerDown = useEffectEvent((e: PointerEvent) => {
    if (
      ref.current &&
      e.target instanceof Node &&
      !ref.current.contains(e.target)
    )
      callback();
  });

  useEffect(() => {
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return ref;
};

export default useOutsideClick;
