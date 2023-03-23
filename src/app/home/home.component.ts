import { Component, OnInit } from "@angular/core";
import { Record } from "../records/record";

@Component({
    selector: "app-root",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
  })
export class HomeComponent implements OnInit {
    records: Array<Record>;

    ngOnInit(): void {
      this.records = new Array<Record>(new Record(1,4532,1), new Record(2,4536,3));
    }

    emptyList(): void {
      this.records = new Array<Record>();
    }

    getSurfaceTypeName(): string {
      return "TODO: Show SurfaceType name";
    }

    getGradeNameAndDescription(): string {
      return "TODO: Show Grade name and description";
    }
}