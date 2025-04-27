import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal, signal, ViewEncapsulation, WritableSignal } from '@angular/core';
import { RequestExplorerComponent } from '../../components/request-explorer/request-explorer.component';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, LocationStrategy } from '@angular/common';
import { RequestExplorerService } from '../../services/request-explorer.service';
import { RequestExplorerFacadeService } from '../../facades/request-explorer-facade.service';
import { RequestExplorerStoreService } from '../../stores/request-explorer-store.service';
import { EMPTY, Observable } from 'rxjs';
import { NationData, RequestExplorer } from '@request-explorer-models/request-explorer';
import { RequestExplorerSignals } from '../../signals/request-explorer.signals';
import { HttpClient, httpResource } from '@angular/common/http';
import { RequestExplorerHttpResourceService } from '../../signals/request-explorer-http-resource.service';

@Component({
  selector: 'app-request-explorer-container',
  imports: [
    RouterOutlet,
    RequestExplorerComponent,
    CommonModule
  ],
  templateUrl: './request-explorer-container.component.html',
  styleUrl: './request-explorer-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestExplorerContainerComponent {
  request$: Observable<RequestExplorer[]> = EMPTY;
  requestSignal: Signal<RequestExplorer[]>;
 populationData: Signal<NationData[]> = signal<NationData[]>([]);


  constructor(
    private router: Router,
    private requestExplorerFacade: RequestExplorerFacadeService,
    private requestExplorerStore: RequestExplorerStoreService,
    private requestExplorerSignals: RequestExplorerSignals,
    private requestExplorerService: RequestExplorerService,
    private requestExplorerHttpResourceService: RequestExplorerHttpResourceService
  ) {

    // const populationData = computed(() => this.getPopulationData().value());
    // console.log('Population Data:', populationData()); // Notification logic

    this.request$ = this.requestExplorerStore.request$;
    this.requestSignal = this.requestExplorerSignals.requests$;
    this.populationData  = this.requestExplorerHttpResourceService.populations;

    // effect(() => {
    //   const currentRequests = this.requestExplorerSignals.requests$();
    //   console.log('Requests Signal updated:', currentRequests); // Notification logic
    // });

  }



  ngOnInit() {
    console.log('RequestExplorerContainerComponent initialized');
    this.requestExplorerFacade.getRequestExplorer();

  }

  copyRequest() {


    this.router.navigate(['/request-explorer', 'copy-request']);
  }

  deleteRequest() {
    const requests = this.requestExplorerSignals.getRequestExplorer();

    requests.pop();
    this.requestExplorerSignals.setRequestExplorer(requests);
    this.router.navigate(['/request-explorer', 'delete-request']);
  }

}