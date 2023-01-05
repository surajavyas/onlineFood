import { FoodService } from './../services/food/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input()
  foodPageTags?:string[]
  @Input()
  justifyContent:string="center"
  tags?:Tag[]=[]
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.fs.getAllTag()
  }

}
