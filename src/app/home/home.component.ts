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

  getSurfaceTypeName(surfaceTypeId: number): string {
    const surfaceType = this.recordService.surfaceTypes.find(x => x.id === surfaceTypeId);
    return surfaceType?.name ?? "Oops, couldn't find surface type";
  }

  getGradeNameAndDescription(gradeId: number): string {
    const grade = this.recordService.grades.find(x => x.id === gradeId);
    return grade ? `${grade.name} | ${grade.description}` : "Oops, couldn't find grade"
  }
}
