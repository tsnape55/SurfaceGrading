import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from 'src/app/data/grade';
import { SurfaceType } from 'src/app/data/surface-type';
import { Record } from './record';

@Injectable()
export class RecordService {
  records: Array<Record>;
  surfaceTypes: Array<SurfaceType>;
  grades: Array<Grade>;

  initialId: number;

  constructor(private readonly http: HttpClient) {
    this.records = new Array<Record>(
      new Record(1, 4532, 1),
      new Record(2, 4536, 3)
    );
    this.initialId = 3;

    this.http
      .get<Array<SurfaceType>>('assets/surfacetypes.json')
      .subscribe((surfaceTypes: Array<SurfaceType>) => {
        this.surfaceTypes = surfaceTypes;
      });

    this.http
      .get<Array<Grade>>('assets/grades.json')
      .subscribe((grades: Array<Grade>) => {
        this.grades = grades;
      });
  }

  AddItem(surfaceTypeId: number, gradeId: number) {
    this.records.push(new Record(this.initialId, surfaceTypeId, gradeId));
    this.initialId++;
  }

  EmptyList() {
    this.records.splice(0, this.records.length);
  }

  DeleteItemById(recordId: number) {
    const index = this.records.findIndex((x) => x.id === recordId);
    if (index !== -1) {
      this.records.splice(index, 1);
    }
  }
}
