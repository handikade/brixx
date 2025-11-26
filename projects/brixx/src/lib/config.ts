export interface Config {
  label: string;
  isRequired: boolean;
  isReadOnly: boolean;
  metadata: Metadata;
}

export interface Metadata {
  options: unknown[];
}

export enum FieldType {
  STRING = 'string',
  NUMBER = 'number',
  DATE = 'date',
  SELECT = 'select',
  MULTISELECT = 'multiselect',
}
