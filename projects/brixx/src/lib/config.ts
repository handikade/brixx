import type { ValidationConfig } from './validation.util';

export interface Config {
  key: string;
  type: FieldType;
  label?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  validation?: ValidationConfig;
  metadata?: Metadata;
}

export interface Metadata {
  options: unknown[];
}

export enum FieldType {
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  SELECT = 'select',
  MULTISELECT = 'multiselect',
}
