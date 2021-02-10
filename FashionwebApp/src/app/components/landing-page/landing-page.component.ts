import { AfterContentInit, Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';
declare var Parallax: any;
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  border:string;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit,AfterContentInit {
  tiles: Tile[] = [
    {text: 'Event1', cols: 3, rows: 1, color: 'transparent',border:'1px solid #000'},
    {text: '', cols: 1, rows: 1, color:'transparent',border:'0px'},
    {text: 'Event2', cols: 1, rows: 1, color: 'transparent',border:'1px solid #000'},
    {text: 'Event3', cols: 2, rows: 1, color: 'transparent',border:'1px solid #000'},
  ];
  
  constructor() { }
  ngAfterContentInit(): void {
    // const scene= document.getElementById('scene');
    // const paraInstance = new Parallax(scene,{
    //   relativeInput:true,
    //   hoverOnly:true
    // })
  }

  ngOnInit(): void {
  }
  

}
