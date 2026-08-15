import { Component } from '@angular/core';

export interface Game {
  title: string;
  platform: string;
  description: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class Products {
  readonly games: Game[] = [
    {
      title: 'The Legend of Zelda: Breath of the Wild',
      platform: 'Nintendo Switch',
      description:
        'Despierta de un sueño de cien años y recorre un Hyrule abierto, lleno de misterio, ruinas y libertad absoluta.',
      price: '69,99 €',
      image: 'images/zelda.jpg',
    },
    {
      title: 'Metroid Prime',
      platform: 'Nintendo GameCube',
      description:
        'Samus Aran aterriza en Tallon IV. Un clásico de GameCube que redefinió la exploración en primera persona.',
      price: '59,95 €',
      image: 'images/metroid.jpeg',
    },
    {
      title: 'No More Heroes',
      platform: 'Nintendo Switch',
      description:
        'Travis Touchdown cumple su sueño de ser el mejor asesino del ranking. Estilo, referencias y combate a lo grande.',
      price: '29,99 €',
      image: 'images/nmh.jpeg',
    },
    {
      title: 'Red Dead Redemption',
      platform: 'PlayStation 4',
      description:
        'El Oeste se apaga y John Marston lo sabe. Una historia inolvidable, ahora en su edición para PlayStation 4.',
      price: '49,99 €',
      image: 'images/rdr.jpg',
    },
  ];
}