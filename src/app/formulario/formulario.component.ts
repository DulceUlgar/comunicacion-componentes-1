import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  template: `
    <h2>Lista de Personas:</h2>
    <ul>
      <li *ngFor="let persona of personas">
        ID: {{ persona.id }},
        Nombre: {{ persona.name }},
        Apellido: {{ persona.lastName }},
        Cargo: {{ persona.position }},
        Salario: {{ persona.salary }}
      </li>
    </ul>
  `
})
export class ListaComponent {
  personas: any[] = [];

  agregarPersona(persona: any) {
    this.personas.push(persona);
  }
}
