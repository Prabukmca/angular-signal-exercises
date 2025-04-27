import { Injectable } from '@angular/core';
import { RequestExplorer, RequestExplorerState } from '@request-explorer-models/request-explorer';
import { BehaviorSubject, distinct, distinctUntilChanged, map } from 'rxjs';

let _requestExplorerState: RequestExplorerState = {
  requests: [],
}
@Injectable({
  providedIn: 'root'
})
export class RequestExplorerStoreService {

  constructor() { }

  private requestExplorerState = new BehaviorSubject<RequestExplorerState>(_requestExplorerState);
  private requestExplorerStore$ = this.requestExplorerState.asObservable();

  request$ = this.requestExplorerStore$.pipe(map((state) => state.requests), distinctUntilChanged());

  setRequestExplorer(requests: RequestExplorer[]) {

    const requestExplorerState: RequestExplorerState = {
      ..._requestExplorerState, requests
    };
    this.updateRequestExplorerState(requestExplorerState);
  }

  private updateRequestExplorerState(requestExplorerState: RequestExplorerState) {
    this.requestExplorerState.next(requestExplorerState);
  }
}
