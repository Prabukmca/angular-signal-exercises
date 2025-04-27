import { computed, Injectable, signal } from "@angular/core";
import { RequestExplorer, RequestExplorerState } from '@request-explorer-models/request-explorer';
import { RequestExplorerService } from "../services/request-explorer.service";

let _requestExplorerState: RequestExplorerState = {
  requests: [],
};
@Injectable({
  providedIn: 'root'
})
export class RequestExplorerSignals {
  private requestExplorerState = signal<RequestExplorerState>(_requestExplorerState);

  requests$ = computed(() => this.requestExplorerState().requests);


    constructor(
     private requestExplorerService: RequestExplorerService
    ) {

    }

setRequestExplorer(requests: RequestExplorer[]) {
    const newRequests = [...requests];
    const requestExplorerState: RequestExplorerState = {
      ..._requestExplorerState,
      requests: newRequests,
    };
    this.updateRequestExplorerState(requestExplorerState);
  }

getRequestExplorer(): RequestExplorer[] {
    return this.requestExplorerState().requests;
  }

private updateRequestExplorerState(requestExplorerState: RequestExplorerState) {
    this.requestExplorerState.set(requestExplorerState);
  }
}