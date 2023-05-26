import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-workout-make',
  templateUrl: './workout-make.page.html',
  styleUrls: ['./workout-make.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WorkoutMakePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
