import { Component } from '@angular/core';
import { Task } from './task.model';

@
Component({
    selector: 'my-app',
    template: `
  <div class="row">
  <div class="col-sm-6 container">
    <h1>My First Angular 2 App</h1>
    <h3>One of my favorite bands is: {{ favoriteBand }}</h3>
    <p>If I had to choose a favorite painter it would be: {{ favoritePainter }}</p>
    <p>The number of slices of pie I would like is: {{ slicesOfPie }}</p>
    <h3>One of my favorite albums is: </h3>
    <p>{{ favoriteAlbum.title }}</p>
    <p>By {{ favoriteAlbum.artist }}</p>
    <p>Released in {{ favoriteAlbum.released }}</p>
    <h3>One of my favorite dishes is: </h3>
    <p>Meat: {{ favoriteDish.meat }}</p>
    <p>Fish: {{ favoriteDish.fish }}</p>
    <p>Vegetable: {{ favoriteDish.vegetable }}</p>
    <h3>Here are my favorite pies!</h3>
    <div class="pie" *ngFor="let currentPie of favoritePies">
      <p>{{currentPie}}</p>
    </div>
    <h3>Here are my favorite albums!</h3>
    <div class="album" *ngFor="let album of albums">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
      <p>Released in {{album.released}}</p>
    </div>
  </div>

  //////////////////////////////////////
  <div class="col-sm-6 container">


  <div class="container">
    <h1>My First Angular 2 App</h1>

    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
     ></task-list>
     <edit-task
     [childSelectedTask]="selectedTask"
     (doneClickedSender)="finishedEditing()"
     ></edit-task>
     <new-task
     (newTaskSender)="addTask($event)"
     ></new-task>
  </div>

  <div class="container">
    <h1>My First Angular 2 App</h1>
    <pies></pies>


  </div>
</div>

  `
})
export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Create To-Do List app.", 6),
    new Task("Learn Kung Fu.", 3),
    new Task("Rewatch all the Lord of the Rings movies.", 7),
    new Task("Do the laundry.", 4)
  ];
    selectedTask: Task = null;
    showDetails(clickedTask: Task) {
      this.selectedTask = clickedTask;
    }
    finishedEditing() {
        this.selectedTask = null;
    }
    addTask(newTaskFromChild: Task) {
      this.masterTaskList.push(newTaskFromChild);
    }

    favoriteBand: string = 'Ani DiFranco';
    favoritePainter: string = 'Van Gogh';
    slicesOfPie: number = 3;
    favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
    favoriteDish: Dish = new Dish("steak", "salmon", "carrot");
    favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry",
        "Blueberry"
    ];
    albums: Album[] = [
        new Album("Pulse", "Pink Floyd", 1995),
        new Album("Funhouse", "The Stooges", 1970),
        new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
        new Album("Dilate", "Ani DiFranco", 1996),
        new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
        new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
    ];
}
export class Album {
    constructor(public title: string, public artist: string, public released:
        number) {}
}
export class Dish {
    constructor(public meat: string, public fish: string, public vegetable:
        string) {}
}
