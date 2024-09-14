// src/app/timeline/timeline.component.ts
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/GetData/get-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  timelineData: any;

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      console.log('Odebrane dane:', data);
      this.timelineData = data.sonsOfGod;
    });

    console.log('datttaaa', this.timelineData);
  }
}
