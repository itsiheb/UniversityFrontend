import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() toggleSideBarPlease: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  toggleSideBar(){
    this.toggleSideBarPlease.emit();
  }

}
