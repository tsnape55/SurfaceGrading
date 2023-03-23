import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Grade } from '../data/grade';
import { SurfaceType } from '../data/surface-type';
import { Record } from './record';
import { RecordService } from './record.service';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
})
export class CreateRecordComponent {
  nextId = 3;
  isAdding = false;
  newRecord: Record;
  surfaceTypes: Array<SurfaceType>;
  grades: Array<Grade>;

  constructor(private readonly recordService: RecordService) {}

  showAddForm(): void {
    this.isAdding = true;
    this.newRecord = new Record(this.nextId, 0, 0);
    this.grades = this.recordService.grades;
    this.surfaceTypes = this.recordService.surfaceTypes;
  }

  submit(): void {
    this.isAdding = false;
    this.nextId++;

    // TODO: Submit new record to the list
  }

  canSubmit(): boolean {
    if (this.newRecord.surfaceTypeId === 0) {
      return false;
    }

    if (this.newRecord.gradeId === 0) {
      return false;
    }

    return true;
  }
}
