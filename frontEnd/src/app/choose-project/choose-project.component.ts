import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.component.html',
  styleUrls: ['./choose-project.component.css']
})
export class ChooseProjectComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  name = 'John Cena';
  shortName = 'J C';
  conpany = 'WWE';
  jobTitle = 'Wrestler';
  location = 'USA';
  selfIntroduction = 'ARE YOU SURE ABOUT THAT?';
  projectName = 'WWE2020';
  // tslint:disable-next-line:typedef
  projectIntroduction = '專案內容敘述';
  getName(){
    return this.name;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
