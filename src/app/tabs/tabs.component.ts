import { Component, ChangeDetectionStrategy } from '@angular/core';
  import { CheckboxComponent } from '../components/checkbox/checkbox.component';
  import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-tabs',
	imports: [
		CheckboxComponent,
		FormsModule,
        ReactiveFormsModule,
	],
	templateUrl: './tabs.component.html',
	styleUrl: './tabs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
	public label: string = 'Label';
	public caption: string = 'Caption';

	constructor(
        
    ) {

    }

	protected form = new FormGroup({
        checkbox: new FormControl(false),

    });
}
