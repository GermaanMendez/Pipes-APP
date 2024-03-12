import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {


  public nameLower : string = 'german'
  public nameUpper: string = 'GERMAN'
  public nameTitle: string = 'GerMaN'

  public customDate:Date = new Date();
}
