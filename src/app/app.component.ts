import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //*********Start of code for data passing between parent to child********
  public name="Yasara";
  //*********End of code for data passing between parent to child********

  title = 'SearchAutoComplete';

 // options: string[]=['Angular','React','Node'];
 myControl = new FormControl();
 options: string[] = ['Shyamantha', 'Bhashitha', 'Hesith','Keshani','Yasara'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
