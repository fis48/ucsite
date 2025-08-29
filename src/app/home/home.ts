import { Component, inject, REQUEST } from '@angular/core';
import { Main } from '../services/main';
import { Company } from '../../interfaces/company';
import { Adn } from '../adn/adn';

@Component({
  selector: 'app-home',
  imports: [
    Adn
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private source:string | undefined
  private mainService = inject(Main)
  public company:Company | undefined

  ngOnInit() {
    this.source = window.location.href
    if (this.source) {
      this.company = this.mainService.handleSource(this.source)
    }
  }
}
