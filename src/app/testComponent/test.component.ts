import {Component} from '@angular/core';
let thePics: string[] = ['https://cdn-images-1.medium.com/max/2000/1*plgkFP7kur5KTJKHRGqsyg.png','https://raw.githubusercontent.com/angular-class/awesome-angular2/master/media/awesome-angular2.png'];
let picI: number = 0;

@Component({
  selector: 'jbt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})

export class TestComponent{
  static changePic(): void{
    document.getElementById('angPicHere').setAttribute('src',`${thePics[picI]}`);
    this.iteratePic();
  }
  static iteratePic(): void{
    if(picI === thePics.length -1){
      picI = 0;
    }
    else{
      picI++;
    }
  }
}
// document.getElementById('angPicHere').setAttribute('onclick',`${TestComponent.changePic()}`);
