import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'] 
})
export class MapComponent {
  country: any = {}; 

  constructor(private apiService: ApiService) {}

  // Handles the event when a country is selected on the map
  setCountryData(event: any) {
    console.log('event', event.target.id);
    
    // Fetch and set country data based on the event targetted id
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      console.log(data);
      this.country = {
        ...data,
        place: event.target.getAttribute('title') 
      };
    });
  }
}
