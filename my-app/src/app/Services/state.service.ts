import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from  '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http:HttpClient) { }

  getStateData()
  {
    //Get Data From Server
    return this.http.get(environment.apiUrl + 'fsmData');

    //Get Mock Data
    //return this.http.get('../../assets/mockData/stateData.json');
  }
}
