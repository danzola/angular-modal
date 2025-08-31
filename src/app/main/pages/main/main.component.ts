import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  constructor(
    private modal: ModalService
  ) {}

  async borrar() {
    const ok = await this.modal.confirm({
      title: 'Eliminar registro',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warn',
      okLabel: 'Sí, eliminar',
      cancelLabel: 'No',
    });
    if (ok) {
      console.log('click ok');
    }
  }

  async info() {
    await this.modal.alert({
      title: 'Operación exitosa',
      text: 'La campaña se creó correctamente.',
      icon: 'success',
      okLabel: 'Entendido',
    });
  }

  async pedirNombre() {
    const nombre = await this.modal.prompt({
      title: 'Nombre de la campaña',
      text: 'Ingresa un nombre:',
      icon: 'question',
      placeholder: 'Ej: nombre campaña',
    });
    if (nombre !== null) {
      console.log('nombre', nombre);
    }
  }

  async crearCamp() {
    const result = await this.modal.form({
      title: 'Nueva campaña',
      text: 'Completa los campos:',
      icon: 'question',
      okLabel: 'Guardar',
      cancelLabel: 'Cancelar',
      fields: [
        {
          key: 'nombre',
          type: 'text',
          label: 'Nombre',
          required: true,
          placeholder: 'Ej: Jornada UCI',
        },
        { key: 'descripcion', type: 'textarea', label: 'Descripción', rows: 3 },
        {
          key: 'fechaInicio',
          type: 'date',
          label: 'Fecha inicio',
          required: true,
        },
        { key: 'horaInicio', type: 'time', label: 'Hora inicio' },
        { key: 'fechaFin', type: 'datetime', label: 'Fecha fin' },
        {
          key: 'cupos',
          type: 'number',
          label: 'Cupos',
          min: 1,
          max: 500,
          step: 1,
          value: 50,
        },
        {
          key: 'responsable',
          type: 'select',
          label: 'Responsable',
          required: true,
          options: [
            { label: 'Ana', value: 1 },
            { label: 'Luis', value: 2 },
          ],
        },
        {
          key: 'apoyos',
          type: 'multiselect',
          label: 'Apoyos',
          options: [
            { label: 'Logística', value: 'log' },
            { label: 'Divulgación', value: 'mkt' },
          ],
        },
        {
          key: 'requiereAut',
          type: 'checkbox',
          label: '¿Requiere autorización previa?',
        },
        {
          key: 'nivel',
          type: 'radio',
          label: 'Nivel',
          required: true,
          options: [
            { label: 'Bajo', value: 'low' },
            { label: 'Medio', value: 'mid' },
            { label: 'Alto', value: 'high' },
          ],
        },
        {
          key: 'contacto',
          type: 'email',
          label: 'Correo de contacto',
          required: true,
        },
        {
          key: 'soporte',
          type: 'file',
          label: 'Soporte (PDF)',
          hint: 'Opcional. Máx 5MB.',
        },
      ],
    });

    if (result) {
      console.log('result crear campaña', result);
    }
  }
}
