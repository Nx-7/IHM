import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) {

  }

  ngOnInit(){   
  }

  showExercises(){
    this.navCtrl.navigateForward('exercises')
    console.log()
  }

  showExercises2(){
    this.navCtrl.navigateForward('exercises2')
  }

  
  showPerfil(){
    this.navCtrl.navigateForward('perfil')
  }

  showPlans(){
    this.navCtrl.navigateForward('plans')
  }

  showProgress(){
    this.navCtrl.navigateForward('progress')
  }

  showResults(){
    this.navCtrl.navigateForward('results')
  }

  showWorkout(){
    this.navCtrl.navigateForward('workout')
  }

  showWorkoutMake(){
    this.navCtrl.navigateForward('workoutmake')
  }
}
