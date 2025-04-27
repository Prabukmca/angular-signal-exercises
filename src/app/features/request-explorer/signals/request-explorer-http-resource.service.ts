import { HttpErrorResponse, httpResource } from "@angular/common/http";
import { computed, Injectable } from "@angular/core";
import { NationData, PopulationData, RequestExplorer } from "@request-explorer-models/request-explorer";

@Injectable({
  providedIn: 'root'
})

export class RequestExplorerHttpResourceService {
  constructor() {
    console.log('RequestExplorerHttpResourceService initialized');
  }
  // getPopulationData(): HttpResourceRef<RequestExplorer[] | undefined> {
  //   return httpResource<RequestExplorer[]>('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  // }

  private getPopulationDataTwo = httpResource<PopulationData>(() => 
     'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
  );

  populations = computed(() => {
    // this.getPopulationDataTwo.value() ?? [] as NationData[]
console.log('Population Data:', this.getPopulationDataTwo.value()?.data ?? [] as NationData[]);
    return this.getPopulationDataTwo.value()?.data ?? [] as NationData[];
  });
  error = computed(() => this.getPopulationDataTwo.error() as HttpErrorResponse | undefined);

  loading = this.getPopulationDataTwo.isLoading;




}