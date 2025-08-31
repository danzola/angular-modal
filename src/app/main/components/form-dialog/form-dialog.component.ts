import { Component } from '@angular/core';
import { FormPromptData, FormPromptField } from '../../interfaces/form-dialog.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  data!: FormPromptData;
  form!: FormGroup;

  iconMap: Record<string, string> = {
    info: 'pi pi-info-circle text-primary',
    success: 'pi pi-check-circle text-green-500',
    warn: 'pi pi-exclamation-triangle text-yellow-500',
    error: 'pi pi-times-circle text-red-500',
    question: 'pi pi-question-circle text-primary',
  };

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.data = (this.config.data || {}) as FormPromptData;

    const group: Record<string, any> = {};
    this.data.fields.forEach((f) => {
      const v = f.value ?? (f.type === 'checkbox' ? false : null);
      const validators = [];
      if (f.required) validators.push(Validators.required);
      if (f.type === 'email') validators.push(Validators.email);
      if (f.min !== undefined) validators.push(Validators.min(f.min));
      if (f.max !== undefined) validators.push(Validators.max(f.max));
      if (f.pattern) validators.push(Validators.pattern(new RegExp(f.pattern)));
      group[f.key] = [{ value: v, disabled: !!f.disabled }, validators];
    });

    this.form = this.fb.group(group);
  }

  controlOf(field: FormPromptField) {
    return this.form.controls[field.key];
  }

  onOk() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = { ...this.form.getRawValue() };
    this.data.fields.forEach((f) => {
      if (
        ['date', 'time', 'datetime'].includes(f.type) &&
        value[f.key] instanceof Date
      ) {
        value[f.key] = (value[f.key] as Date).toISOString();
      }
    });
    this.ref.close(value);
  }

  onCancel() {
    this.ref.close(null);
  }

  onFileChange(field: FormPromptField, ev: Event) {
    const files = (ev.target as HTMLInputElement).files;
    this.form.patchValue({
      [field.key]: field.multiple ? files : files?.[0] ?? null,
    });
    this.form.get(field.key)?.markAsDirty();
  }
}
