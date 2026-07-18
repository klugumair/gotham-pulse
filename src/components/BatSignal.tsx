export function BatSignal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bat-signal"
      role="img"
      fill="currentColor"
    >
      <path d="M100 12c-6 10-14 16-24 18 6 4 10 10 12 18-8-4-16-6-24-4 4 6 6 12 6 20-6-6-14-10-22-10 6 8 10 16 10 26 8-4 16-6 26-6-4 6-6 12-6 20 8-6 16-10 24-10 2 6 6 12 12 18 6-6 10-12 12-18 8 0 16 4 24 10 0-8-2-14-6-20 10 0 18 2 26 6 0-10 4-18 10-26-8 0-16 4-22 10 0-8 2-14 6-20-8-2-16 0-24 4 2-8 6-14 12-18-10-2-18-8-24-18Z" />
    </svg>
  );
}

export function BatMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 1c-1 2-2.5 3-4.5 3.2C8 5 8.5 6 8.5 7.2 7 6.5 5.5 6.5 4 7c1 .5 1.5 1.5 1.5 3-1-.8-2.5-1.2-4-1.2 1 1.5 2 2.7 2 4.2 0 .3.3.5.6.3C5.6 12.8 8 11 12 11s6.4 1.8 7.9 2.3c.3.2.6 0 .6-.3 0-1.5 1-2.7 2-4.2-1.5 0-3 .4-4 1.2 0-1.5.5-2.5 1.5-3-1.5-.5-3-.5-4.5.2 0-1.2.5-2.2 1-3-2-.2-3.5-1.2-4.5-3.2Z" />
    </svg>
  );
}