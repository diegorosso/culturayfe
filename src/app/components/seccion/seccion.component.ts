import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {
  title = 'Santa Faz y Cultura y Fé';
  paragraph1 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae. Voluptatum odit, nemo non at inventore a culpa doloribus omnis adipisci labore sed ratione, cupiditate optio corrupti vel! Placeat, exercitationem.';
  paragraph2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore hic ut quasi, ipsum minus alias reiciendis aspernatur fugiat cupiditate optio unde dolores ducimus quas repellat tempora doloremque. Asperiores, ea.';
  buttonText = 'Conócenos';
  image1Src = '../../../assets/2019(1).jpg';
  image2Src = '../../../assets/2024_op2.JPG';

  buttonAction() {
    alert('Botón clicado');
  }

}
