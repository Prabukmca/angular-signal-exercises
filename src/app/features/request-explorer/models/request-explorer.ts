export interface RequestExplorer {
  requestGuid: number;
  requestName: string;
  requestDescription: string;
  requestStatusGuid: number;
  requestStatus: string;
  createdOn: Date;  
}

export interface RequestExplorerState {
  requests: RequestExplorer[];  
}

export interface PopulationData{
  data: NationData[];
  source: any[];
}

export interface NationData {
  IDNation: string;
  Nation: string;
  IDYear: number;
  Year: string;
  Population: number;
  SlugNation: string;
}