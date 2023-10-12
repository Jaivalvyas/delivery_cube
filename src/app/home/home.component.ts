import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { map, Observable, startWith } from 'rxjs';
import { AdminService } from '../services/admin.service';
export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};


export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

/**
 * @title Sorting overview
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [

    {
      letter: 'D',
      names: ['Delhi'],
    },

    {
      letter: 'H',
      names: ['Hyderabad'],
    },

    {
      letter: 'K',
      names: ['Kolkata'],
    },

    {
      letter: 'M',
      names: ['Mumbai'],
    },


  ];

  stateGroupOptions!: Observable<StateGroup[]>;



  constructor(private adminservice: AdminService, private _formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  private _filterGroup(value: any): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  public searchTerm !: string;
  public searchTerm1 !: string;

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.adminservice.search.next(this.searchTerm);

  }

  search1(event: any) {

    this.searchTerm1 = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm1);

    this.adminservice.search1.next(this.searchTerm1);
  }


}

