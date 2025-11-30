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

  // String
//   resourceOne = httpResource<any>(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`);

  resourceOne = httpResource<any>(() => `https://datausa.io/api/data?drilldowns=Nation&measures=Population`);


  // Function

  resourceTwo = httpResource<any>(() => `https://datausa.io/api/data?drilldowns=Nation&measures=Population`);
  resourceThree = httpResource<any>(() => {
    return 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  });

  // Object
  resourceFour = httpResource<any>(() =>
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
  );


  private getPopulationDataTwo = httpResource<PopulationData>(() =>
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
  );

  populations = computed(() => {
    console.log('Population Data:', this.getPopulationDataTwo.value()?.data ?? [] as NationData[]);
    return this.getPopulationDataTwo.value()?.data ?? [] as NationData[];
  });
  error = computed(() => this.getPopulationDataTwo.error() as HttpErrorResponse | undefined);

  loading = this.getPopulationDataTwo.isLoading;

}
