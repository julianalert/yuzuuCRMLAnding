export function saEvent(name: string): void {
  if (typeof window === 'undefined') return
  const fn = (window as Window & { sa_event?: (event: string, ...args: unknown[]) => void }).sa_event
  fn?.(name)
}
