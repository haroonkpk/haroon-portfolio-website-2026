import { useContext } from "react";
import { TransitionContext } from "./TransitionProvider";

export function useTransitionNavigate() {
  const { navigate } = useContext(TransitionContext) as {
    navigate: (href: string) => void;
    close: () => void;
  };

  const go = (href: string) => {
    navigate(href);
  };

  return go;
}
