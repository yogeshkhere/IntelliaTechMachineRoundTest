import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {CommonService} from '../../_service/common.service'
import {  tap ,delay, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['pollId','pollName','pollDescription','createdDate'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('dataTableSearchInput', {static:false}) dataTableSearchInput: ElementRef;
  filterValue = "";
  deletemap: any;
  pageSize: any = 20;
  length:any;
  pageEvent : Event;

  constructor(private CommonService: CommonService){
  }

  ngOnInit() {}

  ngAfterViewInit(){
    this.paginator.page.pipe(
      startWith(null),
      delay(0),
      tap(()=> {
          this.getPolls();
        })

    ).subscribe()

    // fromEvent(this.dataTableSearchInput.nativeElement,'keyup')
    // .pipe(
    //     filter(Boolean),
    //     debounceTime(1000),
    //     distinctUntilChanged(),
    //     tap((text) => {
    //       console.log(" ------- ",this.dataTableSearchInput.nativeElement.value)
    //       this.filterValue = this.dataTableSearchInput.nativeElement.value;
    //       this.getPolls();
    //     })
    // )
    // .subscribe();
  }

  getPolls(){
    this.CommonService.getPolls().subscribe(result=>{
      console.log('------- polls data -------->',result)
      this.length = result.dataList.length;
      this.dataSource = result.dataList;
    });
  }


}
