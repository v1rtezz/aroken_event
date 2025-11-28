export interface ArokenOptions {
  audioPath?: string;
  duration?: number;
}

export function triggerAroken(options?: ArokenOptions) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("aroken-trigger", { 
      detail: options || {} 
    }));
  }
}
