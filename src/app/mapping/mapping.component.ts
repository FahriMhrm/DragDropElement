import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mapping",
  templateUrl: "./mapping.component.html",
  styleUrls: ["./mapping.component.css"],
})
export class MappingComponent implements OnInit {
  tables: string[] = [];

  constructor() {}

  ngOnInit(): void {}
  public addTable() {
    this.tables.push(
      "<div class='example-box' cdkDragBoundary='.example-boundary' cdkDrag>Table</div>"
    );
  }
}
