import {
	Component,
	ChangeDetectionStrategy,
  } from '@angular/core';
  import { CheckboxComponent } from '../components/checkbox/checkbox.component';

@Component({
	selector: 'app-tabs',
	imports: [CheckboxComponent],
	templateUrl: './tabs.component.html',
	styleUrl: './tabs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {

}
