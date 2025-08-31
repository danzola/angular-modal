export interface FormPromptField {
  key: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: any;
  options?: FormPromptOption[];
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  hint?: string;
  multiple?: boolean; // file
}

export interface FormPromptOption {
  label: string;
  value: any;
}

export interface FormPromptData {
  title?: string;
  text?: string;
  html?: string;
  icon?: 'info' | 'success' | 'warn' | 'error' | 'question';
  okLabel?: string;
  cancelLabel?: string;
  fields: FormPromptField[];
}

export interface FormPromptField {
  key: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: any;
  options?: FormPromptOption[];
  rows?: number;
  min?: number; max?: number; step?: number;
  pattern?: string;
  hint?: string;
  multiple?: boolean;
}

export type FieldType =
  | 'text'
  | 'password'
  | 'email'
  | 'textarea'
  | 'number'
  | 'select'
  | 'multiselect'
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'time'
  | 'datetime'
  | 'file';
