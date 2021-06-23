import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  risultato:string|undefined
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('api/test').subscribe(a=>{
      this.risultato = (Object.values(a)[0])
    })
  }

}
