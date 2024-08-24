import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Method to fetch data from the world bank API based on a country code
  fetchCountryData(code: string) {
    const apiUrl = `http://api.worldbank.org/v2/country/${code}?format=JSON&per_page=300`; 
    console.log(apiUrl);

    return this.http.get(apiUrl);
  }

  // Method to fetch and process country data then emits it via a subject
  setCountryData(code: string) {
    const countryDataSubject = new Subject(); 

    // Ensures accurate data to be display in the browser
    this.fetchCountryData(code).subscribe((data: any) => {
      const countryData = data[1][0];
      countryDataSubject.next({
        capital: countryData.capitalCity,
        income: countryData.incomeLevel.value,
        region: countryData.region.value,
        countryLatitude: countryData.latitude,
        countryLongitude: countryData.longitude
      });
    });

    return countryDataSubject.asObservable(); 
  }
}
