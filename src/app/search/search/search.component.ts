import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, pluck, retry, startWith, switchMap, tap } from 'rxjs';
import { IPackaging } from 'src/app/model/packaging.interface';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Observable for the input data 
  search: FormControl = new FormControl('');
  // Observable for the output data
  results$!: Observable<IPackaging[]>;

  constructor(private searchService: SearchService) {
    // valueChanges is an observable
    this.results$ = this.search.valueChanges.pipe(
      tap(x => console.log(x)),
      // map((x) => x.toLowerCase()),
      debounceTime(200),  // user has to stop typing for 200ms for us to bother the server with that query
      distinctUntilChanged(),  // if value gets through the pipeline until this point and it is exacly the same as the previous value we sent to server, we dont want to bother the server with a duplicate request 
      filter((search) => search !== ''), // we don't want to send an empty string, its obvious that there wont be a search match
      switchMap((search) => searchService.search(search)  // takes an input observable and returns a different observable. The observable we get from httpRequest will be returned
        .pipe(
          retry(3),   // if network call fails, go ahead and retry it 3 times 
          startWith([])  // before we make this request, clear out the old results 
        )
      )
    )
  }

  ngOnInit(): void {
  }

}

