import { Injectable } from '@angular/core';
import { GenerateMockRequestExplorer } from '../utils/request-explorer';
import { delay, Observable, of } from 'rxjs';
import { RequestExplorer } from '@request-explorer-models/request-explorer';
import { httpResource, HttpResourceRef } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestExplorerService {

  constructor(
  ) { }

  getRequestExplorer(): Observable<RequestExplorer[]> {
    return of(GenerateMockRequestExplorer()).pipe(
      delay(1000),
    );
  }

}
