import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit(){   
    
    this.title.setTitle("Afrizon - Contact");

    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('http://maps.googleapis.com/maps/api/js?key=AIzaSyBevK1XqJGMdutSDCTKaiyalg09asD6km8');
    this.loadScript('../assets/plugins/gmap3/gmap3.min.js');
    this.loadScript('../assets/plugins/gmap3/map-styles.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
