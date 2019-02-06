import { Directive, OnChanges, SimpleChanges, Input, HostBinding } from '@angular/core';
import { Picture } from "./picture.enum";

@Directive({
  selector: '[appShowImages]'
})
export class ShowImagesDirective implements OnChanges{

  @Input() Number: number;
  @HostBinding('src') imageSource;

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('Child ngOnChanges');
    this.imageSource = this.getImage();
    // console.log(this.cardNumber);
  }


  getImage(): string {
    if(this.Number) {
      if(this.Number == 1) {
        return Picture.first;
      } else if(this.Number == 2) {
        return Picture.second;
      } else if(this.Number == 3) {
        return Picture.third
      } else {
        return Picture.forth;
      }
    } else {
      return Picture.forth;
    }
  }

}
