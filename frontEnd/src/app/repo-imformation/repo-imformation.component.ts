import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-imformation',
  templateUrl: './repo-imformation.component.html',
  styleUrls: ['./repo-imformation.component.css']
})
export class RepoImformationComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  projectName = 'WWE2020';
  RepoName = 'Repo1';
  RepoMemberCounts = 50;
  location = 'Japan';
  repoIntroduction = 'Web Ui Design Team';

  constructor() { }

  ngOnInit(): void {
  }

}
