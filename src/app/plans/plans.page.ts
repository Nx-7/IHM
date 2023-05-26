import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlansPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showHome(){
    this.navCtrl.navigateForward('home')
  }

  showExercises(){
    this.navCtrl.navigateForward('exercises')
    
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
