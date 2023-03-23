import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { CreateRecordComponent } from './records/create-record.component';
import { RecordService } from './records/record.service';

@NgModule({
  declarations: [
    HomeComponent,
    CreateRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecordService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
