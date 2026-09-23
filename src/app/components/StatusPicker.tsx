import React from 'react';

interface StatusPickerProps<T extends string> {
  value: T;
  options: T[];
  labels: Record<T, string>;
  disabled?: boolean;
  onChange: (v: T) => void;
}

function StatusPicker<T extends string>({ value, options, labels, disabled, onChange }: StatusPickerProps<T>) {
  return (
    <div className="cf-chips" role="group" aria-label="Cambiar estado">
      {options.map((s) => (
        <button
          key={s}
          type="button"
          className="cf-chip"
          aria-pressed={s === value}
          disabled={disabled}
          onClick={() => s !== value && onChange(s)}
        >
          {s === value ? '✓ ' : ''}
          {labels[s]}
        </button>
      ))}
    </div>
  );
}

export default StatusPicker;
