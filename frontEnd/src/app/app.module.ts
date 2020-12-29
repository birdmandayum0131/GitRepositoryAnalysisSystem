import {Component, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {ChooseProjectComponent} from './choose-project/choose-project.component';
import {BrowserModule} from '@angular/platform-browser';
import {ChooseRepositoryComponent} from './choose-repository/choose-repository.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {CommitTrendComponent} from './commit-trend/commit-trend.component';
import {AnalysisComponent} from './analysis/analysis.component';
import {CodeBaseComponent} from './code-base/code-base.component';
import {IssueTrackComponent} from './issue-track/issue-track.component';
import {CommitLogComponent} from './commit-log/commit-log.component';
import {AddRepoComponent} from './add-repo/add-repo.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {AddRepoFromGithubComponent} from './add-repo-from-github/add-repo-from-github.component';
import {AddProjectFromGithubComponent} from './add-project-from-github/add-project-from-github.component';
import {PersonalImformationComponent} from './personal-imformation/personal-imformation.component';
import {RepoImformationComponent} from './repo-imformation/repo-imformation.component';
import {SignupComponent} from './signup/signup.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [ // 宣告跟 View 有關的元件
    AppComponent,
    AdminComponent,
    ChooseProjectComponent,
    ChooseRepositoryComponent,
    LoginComponent,
    CommitTrendComponent,
    AnalysisComponent,
    CodeBaseComponent,
    IssueTrackComponent,
    CommitLogComponent,
    AddRepoComponent,
    AddProjectComponent,
    AddRepoFromGithubComponent,
    AddProjectFromGithubComponent,
    PersonalImformationComponent,
    RepoImformationComponent,
    SignupComponent,
    HeaderComponent,
    HomepageComponent,


  ],
  imports: [ // 宣告要匯入此模組的外部模組
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [], // 宣告要註冊的服務元件
  bootstrap: [AppComponent]
})

export class AppModule {
}
