import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'exercises',
    loadComponent: () => import('./exercises/exercises.page').then( m => m.ExercisesPage)
  },
  {
    path: 'plans',
    loadComponent: () => import('./plans/plans.page').then( m => m.PlansPage)
  },
  {
    path: 'exercises2',
    loadComponent: () => import('./exercises2/exercises2.page').then( m => m.Exercises2Page)
  },
  {
    path: 'workout',
    loadComponent: () => import('./workout/workout.page').then( m => m.WorkoutPage)
  },
  {
    path: 'workout-make',
    loadComponent: () => import('./workout-make/workout-make.page').then( m => m.WorkoutMakePage)
  },
  {
    path: 'progress',
    loadComponent: () => import('./progress/progress.page').then( m => m.ProgressPage)
  },
  {
    path: 'results',
    loadComponent: () => import('./results/results.page').then( m => m.ResultsPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
];
