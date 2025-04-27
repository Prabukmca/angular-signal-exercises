import { RequestExplorer } from "../models/request-explorer";

const requestStatuses: string[] = ['New', 'In Progress', 'Completed', 'On Hold', 'Cancelled'];

export function GenerateMockRequestExplorer(): RequestExplorer[] {
  return Array.from({ length: 50 }, (_, index) => ({
    requestGuid: index + 1,
    requestName: `Request Name ${index + 1}`,
    requestDescription: `Description for Request ${index + 1}`,
    requestStatusGuid: (index % requestStatuses.length) + 1,
    requestStatus: requestStatuses[index % requestStatuses.length],
    createdOn: new Date(Date.now() - index * 24 * 60 * 60 * 1000), // Decreasing by 1 day for each record
  }))
};

