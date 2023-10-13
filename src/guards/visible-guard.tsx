import { ReactNode } from "react";

interface VisibleGuardProps {
  visible: boolean;
  children: ReactNode;
}

export function VisibleGuard({ visible, children }: VisibleGuardProps) {
  if (visible) {
    return <>{children}</>;
  }
  return <></>;
}
