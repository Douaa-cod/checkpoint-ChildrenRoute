import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';
import { EmbaucheService } from '../services/embauche.service'

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: [
    './detail-cv.component.css',
    './rotating-card.css',
  ]
})
export class DetailCvComponent implements OnInit {
@Input() dataPerson : Personne
  constructor(
    private embaucheService : EmbaucheService
  ) { }

  ngOnInit(): void {
  }
  embaucher(personne: Personne){
    this.embaucheService.embaucher(personne)
  }

}
