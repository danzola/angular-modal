import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GenericDialogData } from '../../interfaces/generic-dialog.interface';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css'],
})
export class GenericDialogComponent {
  data: GenericDialogData;
  promptValue = '';

  iconMap: Record<string, string> = {
    info: 'pi pi-info-circle text-primary',
    success: 'pi pi-check-circle text-green-500',
    warn: 'pi pi-exclamation-triangle text-yellow-500',
    error: 'pi pi-times-circle text-red-500',
    question: 'pi pi-question-circle text-primary',
  };

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.data = (config.data || {}) as GenericDialogData;
    if (this.data.type === 'prompt' && this.data.defaultValue) {
      this.promptValue = this.data.defaultValue;
    }
  }

  onConfirm() {
    if (this.data.type === 'confirm') this.ref.close(true);
    else if (this.data.type === 'prompt')
      this.ref.close(this.promptValue ?? '');
    else this.ref.close();
  }

  onCancel() {
    if (this.data.type === 'confirm') this.ref.close(false);
    else if (this.data.type === 'prompt') this.ref.close(null);
    else this.ref.close();
  }
}
