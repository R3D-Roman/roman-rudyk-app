import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as AOS from 'aos';
import { Project } from '../shared/interfaces';
import { projects } from '../shared/db/db';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent implements OnInit {
  projects: Project[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.projects = projects
      .map((val, index) => {
        return {
          ...val,
          id: index,
        };
      })
      .reverse();

    AOS.init();
  }

  openDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    const idx = this.projects.findIndex((val) => val.id === id);
    dialogConfig.data = this.projects[idx];
    dialogConfig.panelClass = 'modal-bg';
    this.dialog.open(ProjectModalComponent, dialogConfig);
  }
}
