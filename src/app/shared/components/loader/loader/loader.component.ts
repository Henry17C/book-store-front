import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center p-8 gap-2">
      <!-- SVG animado con currentColor para controlarlo con Tailwind -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        [class]="colorClass"
        [style.width]="size"
        [style.height]="size"
      >
        <circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="40" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="100" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="160" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>

      <!-- Texto opcional -->
      @if (text) {
        <span class="font-semibold animate-pulse" [class]="textColorClass">{{ text }}</span>
      }
    </div>
  `,
})
export class LoaderComponent {
  // Configuración por defecto adaptable
  @Input() size: string = '5rem';
  @Input() text: string = 'Cargando...';

  // Clases de Tailwind inyectables
  @Input() colorClass: string = 'text-sky-700';
  @Input() textColorClass: string = 'text-sky-800';
}
