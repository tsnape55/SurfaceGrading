import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Grade } from '../data/grade';
import { SurfaceType } from '../data/surface-type';
import { CreateRecordComponent } from './create-record.component';
import { Record } from './record';
import { RecordService } from './record.service';

let recordServiceStub: Partial<RecordService> = {
  records: new Array<Record>(new Record(1, 4532, 1), new Record(2, 4536, 3)),
  grades: new Array<Grade>(
    {
      description: 'Road is good!',
      id: 1,
      name: 'Grade 1',
    },
    {
      description: 'Road has some marks',
      id: 2,
      name: 'Grade 2',
    }
  ),
  surfaceTypes: new Array<SurfaceType>(
    {
      id: 4532,
      name: 'Aggregate non-bound',
    },
    {
      id: 4533,
      name: 'Bituminous',
    }
  ),
};

describe('CreateRecordComponent', async () => {
  let component: CreateRecordComponent;
  let fixture: ComponentFixture<CreateRecordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRecordComponent],
      providers: [{ provide: RecordService, useValue: recordServiceStub }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CreateRecordComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should define a CreateRecordComponent', waitForAsync(() => {
    expect(component).toBeDefined();
  }));

  it('should default isAdding to false', waitForAsync(() => {
    expect(component.isAdding).toBeFalse();
  }));

  it('should populate grades and surfaceTypes after showAddForm invoked', waitForAsync(() => {
    expect(component.grades).toBeFalsy();
    expect(component.surfaceTypes).toBeFalsy();
    component.showAddForm();
    fixture.detectChanges();
    expect(component.grades.length === 2).toBeTrue();
    expect(component.surfaceTypes.length === 2).toBeTrue();
  }));

  it('should allow for valid record to be submitted', waitForAsync(() => {
    component.showAddForm();
    fixture.detectChanges();
    component.newRecord = new Record(0, component.grades[0].id, component.surfaceTypes[0].id);
    expect(component.canSubmit()).toBeTrue();
  }));
});
