'use client';

import { PushableButton } from "./PushableButton";

interface DownloadButtonProps {
  className?: string;
}

export function DownloadButton({ className }: DownloadButtonProps) {
  return (
    <PushableButton 
      className={className} 
      onClick={() => window.location.href = 'https://github.com/ComputelessComputer/YearProgressApp/releases/download/v1/YearProgressApp.dmg'}
    >
      Download for macOS
    </PushableButton>
  );
}
