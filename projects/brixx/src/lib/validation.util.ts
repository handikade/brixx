import { ValidatorFn, Validators } from '@angular/forms';

/**
 * Declarative shape for mapping validation rules to Angular validators.
 */
export interface ValidationConfig {
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
}

/**
 * Build an Angular `ValidatorFn[]` from a simple `ValidationConfig`.
 *
 * @param config Validation options to apply to a control.
 * @returns Validator functions ready for a `FormControl` or `FormBuilder` call.
 *
 * @example
 * ```ts
 * const validators = buildValidatorsFromConfig({
 *   required: true,
 *   email: true,
 *   minLength: 3,
 *   pattern: /^[a-z]+$/i,
 * });
 * const control = new FormControl('', validators);
 * ```
 */
export function buildValidatorsFromConfig(config: ValidationConfig = {}): ValidatorFn[] {
  const validators: ValidatorFn[] = [];

  if (config.required) {
    validators.push(Validators.required);
  }

  if (config.requiredTrue) {
    validators.push(Validators.requiredTrue);
  }

  if (config.email) {
    validators.push(Validators.email);
  }

  if (typeof config.min === 'number') {
    validators.push(Validators.min(config.min));
  }

  if (typeof config.max === 'number') {
    validators.push(Validators.max(config.max));
  }

  if (typeof config.minLength === 'number') {
    validators.push(Validators.minLength(config.minLength));
  }

  if (typeof config.maxLength === 'number') {
    validators.push(Validators.maxLength(config.maxLength));
  }

  if (typeof config.pattern === 'string' || config.pattern instanceof RegExp) {
    validators.push(Validators.pattern(config.pattern));
  }

  return validators;
}
