import { FormControl } from '@angular/forms';
import { buildValidatorsFromConfig } from './validation.util';

import type { Config } from './config';
import { FieldType } from './config';

type SelectValue = string | number | Record<string, unknown>;

type ControlValueForType<T extends FieldType> = T extends FieldType.TEXT
  ? string
  : T extends FieldType.NUMBER
    ? number
    : T extends FieldType.DATE
      ? Date
      : T extends FieldType.SELECT
        ? SelectValue
        : T extends FieldType.MULTISELECT
          ? SelectValue[]
          : unknown;

type ControlValueForConfig<C extends Config> = ControlValueForType<C['type']>;

export function generateFormControlFromConfig<C extends Config>(
  config: C,
): FormControl<ControlValueForConfig<C> | null> {
  const validators = buildValidatorsFromConfig({
    ...config.validation,
    required: config?.validation?.required ?? false,
  });

  // Treat read-only as a disabled control so Angular will ignore it during submission.
  return new FormControl(
    {
      value: null,
      disabled: config?.isReadOnly ?? false,
    },
    validators,
  );
}
