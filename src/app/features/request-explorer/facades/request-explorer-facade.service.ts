import { Injectable } from '@angular/core';
import { RequestExplorerService } from '../services/request-explorer.service';
import { RequestExplorerStoreService } from '../stores/request-explorer-store.service';
import { RequestExplorerSignals } from '../signals/request-explorer.signals';

@Injectable({
  providedIn: 'root'
})
export class RequestExplorerFacadeService {

  constructor(
    private requestExplorerService: RequestExplorerService,
    private requestExplorerStore: RequestExplorerStoreService,
    private requestExplorerSignals: RequestExplorerSignals
  ) { 

  }

  getRequestExplorer() {
    this.requestExplorerService.getRequestExplorer().subscribe((data) => {
      this.requestExplorerStore.setRequestExplorer(data);
    });

    this.requestExplorerService.getRequestExplorer().subscribe((data) => {
      this.requestExplorerSignals.setRequestExplorer(data);
    });

  }
}
