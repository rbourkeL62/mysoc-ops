import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border border-gray-300 rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-amber-200 border-amber-400 text-amber-900'
      : 'bg-marked border-marked-border text-green-800'
    : 'bg-white text-gray-700 active:bg-gray-100';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      aria-disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-green-600 text-xs" aria-hidden>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
            <path d="M7.629 13.89a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 0 1 1.415-1.415l2.829 2.828 5.657-5.657a1 1 0 0 1 1.415 1.415l-6.945 6.945z" />
          </svg>
        </span>
      )}
    </button>
  );
}
