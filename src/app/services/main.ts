import { Injectable } from '@angular/core';
import { Company } from '../../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class Main {
  private companies:Company[] = [
    { 
      source: "http://localhost:4200/", 
      name: "adn", 
      title:"Adn Ingenieria Estructural",
      logo: "logo_adn.png" 
    }
  ]

  /**
   * handleSource(source:string)
   * Params: source:string - Domain of the requesting company
   */
  public handleSource(source:string) {
    const company:Company = this.companies.find((c:Company) => c.source == source) as Company
    return company
  }

}
