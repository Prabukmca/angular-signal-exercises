import { ChangeDetectionStrategy, Component, Input, Signal, signal, WritableSignal } from '@angular/core';
import { GenerateMockRequestExplorer } from '../../utils/request-explorer';
import { Observable } from 'rxjs';
import { RequestExplorer } from '@request-explorer-models/request-explorer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-explorer',
  imports: [
    CommonModule
  ],
  templateUrl: './request-explorer.component.html',
  styleUrl: './request-explorer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestExplorerComponent {

  @Input() request$: Observable<RequestExplorer[]> = new Observable<RequestExplorer[]>();
  @Input() requestSignal: Signal<RequestExplorer[]> = signal<RequestExplorer[]>([]);

  count: WritableSignal<number> = signal(0);

  increment() {
    this.count.set(this.count() + 1);
    console.log(GenerateMockRequestExplorer());
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
