import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GenericDialogData } from '../interfaces/generic-dialog.interface';
import { FormPromptData } from '../interfaces/form-dialog.interface';
import { FormDialogComponent } from '../components/form-dialog/form-dialog.component';
import { GenericDialogComponent } from '../components/generic-dialog/generic-dialog.component';

type DDConfigX = DynamicDialogConfig & { breakpoints?: { [k: string]: string } };

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(
    private dialog: DialogService
  ) {}

  alert(options: Omit<GenericDialogData, 'type'>): Promise<void> {
    return this.openGeneric<void>({ ...options, type: 'alert' });
  }

  confirm(options: Omit<GenericDialogData, 'type'>): Promise<boolean> {
    return this.openGeneric<boolean>({ ...options, type: 'confirm' });
  }

  prompt(options: Omit<GenericDialogData, 'type'>): Promise<string | null> {
    return this.openGeneric<string | null>({ ...options, type: 'prompt' });
  }

  form(options: FormPromptData): Promise<Record<string, any> | null> {
    const ref: DynamicDialogRef = this.dialog.open(FormDialogComponent, {
      header: options.title || 'Formulario',
      modal: true,
      closable: false,
      dismissableMask: false,
      data: options,
      width: '40rem',
      breakpoints: { '1199px': '60vw', '991px': '70vw', '575px': '90vw' },
      contentStyle: { 'max-height': '75vh', overflow: 'auto' }
    } as DDConfigX);

    return new Promise(res => ref.onClose.subscribe(result => res(result)));
  }

  private openGeneric<T>(data: GenericDialogData): Promise<T> {
    const ref: DynamicDialogRef = this.dialog.open(GenericDialogComponent, {
      header: data.title || 'Mensaje',
      modal: true,
      closable: false,
      dismissableMask: false,
      data,
      width: '32rem',
      breakpoints: { '1199px': '50vw', '991px': '70vw', '575px': '90vw' },
      contentStyle: { 'max-height': '75vh', overflow: 'auto' }
    } as DDConfigX);

    return new Promise<T>(res => ref.onClose.subscribe((result: T) => res(result)));
  }
}
