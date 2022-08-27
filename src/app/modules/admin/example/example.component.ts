import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
    payee: string;
    child: string;
    threeWeeks: string;
    twoWeeks: string;
    oneWeek: string;
    Current: string;
    PendingAmount: string;
    OverPayment: string;
    PendingCredinote: string;
    TotalPendingAmount: string;
  }
  
  /** Constants used to fill up our data base. */
  const FRUITS: string[] = [
    'blueberry',
    'lychee',
    'kiwi',
    'mango',
    'peach',
    'lime',
    'pomegranate',
    'pineapple',
  ];
  const NAMES: string[] = [
    'Berlin',
    'John Deo',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
  ];
@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls:['./example.component.css']
})
export class ExampleComponent
{
    displayedColumns: string[] = ['payee', 'child', 'threeWeeks','twoWeeks','oneWeek','Current','PendingAmount','OverPayment','PendingCredinote', 'TotalPendingAmount'];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor() {
      // Create 100 users
      const users = Array.from({length: 100}, (_, k:any) => createNewUser(k));
  
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
    }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    getTotalCost() {
        return 200;
      }
  }

  function createNewUser(payee: string): UserData {
    const child =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      payee: child,
      child: child,
      threeWeeks: Math.round(Math.random() * 100).toString(),
      twoWeeks: Math.round(Math.random() * 100).toString(),
      oneWeek: Math.round(Math.random() * 100).toString(),
      Current: Math.round(Math.random() * 100).toString(),
      PendingAmount: Math.round(Math.random() * 100).toString(),
      OverPayment: Math.round(Math.random() * 100).toString(),
      PendingCredinote: Math.round(Math.random() * 100).toString(),
      TotalPendingAmount: Math.round(Math.random() * 100).toString(),
    

    };

    
}
