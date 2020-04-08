import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  videoBox = []
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoBox = JSON.parse(sessionStorage.getItem('youtube-url'))
  }

  getSecureUrl(ids) {
    let url = 'https://www.youtube.com/embed/' + ids + '?autoplay=1'
    console.log(url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
