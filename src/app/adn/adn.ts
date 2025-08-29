import { Component, Input } from '@angular/core';
import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-adn',
  imports: [],
  templateUrl: './adn.html',
  styleUrl: './adn.css'
})
export class Adn {
  @Input() company:Company | undefined
}
