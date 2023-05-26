import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController} from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showExercises(){
    this.navCtrl.navigateForward('exercises')
  }
  
  showExercises2(){
    this.navCtrl.navigateForward('exercises2')
  }
  
  showHome(){
    this.navCtrl.navigateForward('home')
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
