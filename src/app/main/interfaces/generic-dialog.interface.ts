export interface GenericDialogData {
  title?: string;
  text?: string;
  html?: string;
  icon?: 'info'|'success'|'warn'|'error'|'question';
  type?: DialogType;
  okLabel?: string;
  cancelLabel?: string;
  placeholder?: string;
  defaultValue?: string;
}

export type DialogType = 'alert' | 'confirm' | 'prompt';
