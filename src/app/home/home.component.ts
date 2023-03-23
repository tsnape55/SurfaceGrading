import { Component, OnInit } from '@angular/core';
import { Record } from '../records/record';
import { RecordService } from '../records/record.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  records: Array<Record>;

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.records = this.recordService.records;
  }

  emptyList(): void {
    this.recordService.emptyList();
  }

  getSurfaceTypeName(): string {
    return 'TODO: Show SurfaceType name';
  }

  getGradeNameAndDescription(): string {
    return 'TODO: Show Grade name and description';
  }
}
