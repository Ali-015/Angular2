import { CommunicateService } from './../../communicate.service';
import { Router } from '@angular/router';
import { TableData } from './../table-data';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpService } from '../../http.service';
import { MatDialog } from '@angular/material';
import { MyNewDialogComponent } from '../../about/my-dialog/my-dialog.component';
import * as _ from 'underscore';




@Component({
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css'],
  providers: [HttpService]
})
export class IndustryComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = ['id', 'name', 'progress', 'color', 'actions'];
  dataSource: MatTableDataSource<TableData>;
  public jsonData: any;
  public jsonData1: any;
  public dialogRef: any;
  public dialogResult: any;
  public data: any;
  public totalRecords: any;
  noRecords: boolean;


  // jsonData = [{"id":"1","name":"Theodore I.","progress":"23","color":"yellow"},{"id":"2","name":"Thomas I.","progress":"11","color":"maroon"},{"id":"3","name":"Isabella A.","progress":"53","color":"maroon"},{"id":"4","name":"Charlotte O.","progress":"40","color":"olive"},{"id":"5","name":"Mia E.","progress":"29","color":"gray"},{"id":"6","name":"Isabella J.","progress":"42","color":"maroon"},{"id":"7","name":"Jasper M.","progress":"67","color":"black"},{"id":"8","name":"Theodore C.","progress":"78","color":"teal"},{"id":"9","name":"Olivia C.","progress":"60","color":"yellow"},{"id":"10","name":"Oliver O.","progress":"86","color":"orange"},{"id":"11","name":"Oliver V.","progress":"39","color":"blue"},{"id":"12","name":"Isabella T.","progress":"90","color":"lime"},{"id":"13","name":"Levi T.","progress":"42","color":"olive"},{"id":"14","name":"Isabella M.","progress":"35","color":"green"},{"id":"15","name":"Mia T.","progress":"65","color":"teal"},{"id":"16","name":"Thomas L.","progress":"31","color":"blue"},{"id":"17","name":"Levi L.","progress":"78","color":"yellow"},{"id":"18","name":"Oliver J.","progress":"95","color":"aqua"},{"id":"19","name":"Thomas J.","progress":"56","color":"lime"},{"id":"20","name":"Olivia E.","progress":"30","color":"orange"},{"id":"21","name":"Atticus M.","progress":"0","color":"blue"},{"id":"22","name":"Charlotte A.","progress":"22","color":"aqua"},{"id":"23","name":"Theodore O.","progress":"74","color":"olive"},{"id":"24","name":"Violet C.","progress":"11","color":"blue"},{"id":"25","name":"Atticus I.","progress":"41","color":"aqua"},{"id":"26","name":"Maia V.","progress":"32","color":"lime"},{"id":"27","name":"Mia I.","progress":"35","color":"orange"},{"id":"28","name":"Olivia M.","progress":"1","color":"red"},{"id":"29","name":"Jack A.","progress":"43","color":"aqua"},{"id":"30","name":"Levi L.","progress":"54","color":"green"},{"id":"31","name":"Charlotte A.","progress":"93","color":"olive"},{"id":"32","name":"Arthur I.","progress":"30","color":"fuchsia"},{"id":"33","name":"Isla E.","progress":"26","color":"aqua"},{"id":"34","name":"Atticus J.","progress":"82","color":"lime"},{"id":"35","name":"Thomas A.","progress":"13","color":"purple"},{"id":"36","name":"Charlotte C.","progress":"87","color":"aqua"},{"id":"37","name":"Maia A.","progress":"69","color":"blue"},{"id":"38","name":"Olivia L.","progress":"7","color":"teal"},{"id":"39","name":"Jasper M.","progress":"4","color":"red"},{"id":"40","name":"Thomas C.","progress":"9","color":"blue"},{"id":"41","name":"Isabella M.","progress":"14","color":"gray"},{"id":"42","name":"Violet C.","progress":"90","color":"red"},{"id":"43","name":"Cora A.","progress":"10","color":"blue"},{"id":"44","name":"Amelia A.","progress":"84","color":"green"},{"id":"45","name":"Cora A.","progress":"41","color":"aqua"},{"id":"46","name":"Violet T.","progress":"24","color":"fuchsia"},{"id":"47","name":"Thomas T.","progress":"27","color":"red"},{"id":"48","name":"Asher C.","progress":"29","color":"lime"},{"id":"49","name":"Jack J.","progress":"68","color":"navy"},{"id":"50","name":"Theodore I.","progress":"62","color":"fuchsia"},{"id":"51","name":"Levi C.","progress":"30","color":"navy"},{"id":"52","name":"Elizabeth A.","progress":"97","color":"fuchsia"},{"id":"53","name":"Oliver L.","progress":"79","color":"fuchsia"},{"id":"54","name":"Theodore C.","progress":"61","color":"blue"},{"id":"55","name":"Thomas A.","progress":"7","color":"navy"},{"id":"56","name":"Cora T.","progress":"89","color":"yellow"},{"id":"57","name":"Isabella A.","progress":"54","color":"lime"},{"id":"58","name":"Jasper M.","progress":"75","color":"navy"},{"id":"59","name":"Isabella C.","progress":"46","color":"blue"},{"id":"60","name":"Thomas V.","progress":"32","color":"yellow"},{"id":"61","name":"Arthur C.","progress":"99","color":"yellow"},{"id":"62","name":"Isabella A.","progress":"76","color":"black"},{"id":"63","name":"Asher C.","progress":"17","color":"purple"},{"id":"64","name":"Levi O.","progress":"6","color":"maroon"},{"id":"65","name":"Oliver A.","progress":"49","color":"maroon"},{"id":"66","name":"Charlotte M.","progress":"89","color":"green"},{"id":"67","name":"Thomas A.","progress":"96","color":"navy"},{"id":"68","name":"Oliver E.","progress":"56","color":"red"},{"id":"69","name":"Olivia A.","progress":"49","color":"yellow"},{"id":"70","name":"Maia O.","progress":"20","color":"orange"},{"id":"71","name":"Asher I.","progress":"58","color":"purple"},{"id":"72","name":"Charlotte A.","progress":"47","color":"teal"},{"id":"73","name":"Atticus L.","progress":"88","color":"olive"},{"id":"74","name":"Jack A.","progress":"87","color":"green"},{"id":"75","name":"Amelia I.","progress":"77","color":"black"},{"id":"76","name":"Maia J.","progress":"17","color":"aqua"},{"id":"77","name":"Charlotte A.","progress":"47","color":"red"},{"id":"78","name":"Arthur M.","progress":"26","color":"purple"},{"id":"79","name":"Amelia M.","progress":"49","color":"maroon"},{"id":"80","name":"Elizabeth A.","progress":"88","color":"blue"},{"id":"81","name":"Violet T.","progress":"99","color":"orange"},{"id":"82","name":"Jasper A.","progress":"67","color":"olive"},{"id":"83","name":"Atticus O.","progress":"38","color":"maroon"},{"id":"84","name":"Isla T.","progress":"33","color":"yellow"},{"id":"85","name":"Levi C.","progress":"54","color":"teal"},{"id":"86","name":"Isabella A.","progress":"53","color":"aqua"},{"id":"87","name":"Jack M.","progress":"39","color":"yellow"},{"id":"88","name":"Theodore O.","progress":"71","color":"olive"},{"id":"89","name":"Arthur M.","progress":"75","color":"teal"},{"id":"90","name":"Oliver O.","progress":"21","color":"fuchsia"},{"id":"91","name":"Isabella C.","progress":"13","color":"gray"},{"id":"92","name":"Isabella J.","progress":"23","color":"red"},{"id":"93","name":"Thomas J.","progress":"78","color":"teal"},{"id":"94","name":"Cora I.","progress":"26","color":"teal"},{"id":"95","name":"Thomas T.","progress":"98","color":"blue"},{"id":"96","name":"Levi A.","progress":"20","color":"gray"},{"id":"97","name":"Oliver C.","progress":"33","color":"green"},{"id":"98","name":"Mia V.","progress":"100","color":"navy"},{"id":"99","name":"Amelia C.","progress":"61","color":"gray"},{"id":"100","name":"Arthur O.","progress":"6","color":"blue"}];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef, private router: Router, private service: CommunicateService) { }

  ngOnInit() {
    console.log("Industry");

    this.data = this.service.get();
    if (this.data) {
      this.paginator.pageSize = this.data.pageSize;
    }
    this.jsonData = this.http.getJsonDataForTable().subscribe(
      data => {
        this.totalRecords = Object.keys(data).length;
        this.jsonData1 = data;
        this.dataSource = new MatTableDataSource(this.jsonData1);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err => {
        console.log("error");
        console.log(err);
      });


    // Assign the data to the data source for the table to render



  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {

  }

  applyFilter(filterValue: string) {
    this.noRecords = false;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.totalRecords = this.dataSource.filteredData.length;

    if (this.dataSource.filteredData.length === 0) {
        this.noRecords = true;
    }
  }

  delete(row: any, dataSource: any, index: number, event) {
    event.stopPropagation();


    this.dataSource.filteredData = _.without(this.dataSource.filteredData, _.findWhere(this.dataSource.filteredData, {
      id: row.id
      }));

      console.log(this.dataSource.filteredData);


    this.dataSource = new MatTableDataSource(this.dataSource.filteredData);
    this.totalRecords--;

  }

  edit(row: any, dataSource: any, index: number, event) {

    event.stopPropagation();

    this.dialogRef = this.dialog.open(MyNewDialogComponent, {
      width: '600px',
      data: row
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
      // this.applyFilter('');
      this.changeDetectorRefs.detectChanges();
    });

  }

  goToDetail(dataSource, index) {
    this.data = this.service.get();
    if (this.data !== undefined) {
      this.data.rowData = dataSource[index];
      this.data.fromLogin = true;
      this.data.pageSize = this.paginator.pageSize;
    } else {
      dataSource[index].fromLogin = false;
      dataSource[index].pageSize = this.paginator.pageSize;
      this.service.set(dataSource[index]);

    }

    console.log(this.paginator.pageSize);
    this.router.navigate(['industryDetail', dataSource[index].id]);
  }

  ngOnDestroy() {
    this.jsonData.unsubscribe();
    // this.dialogRef.unsubscribe();
  }

}

