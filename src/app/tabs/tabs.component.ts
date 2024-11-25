import { Component, ChangeDetectionStrategy, DoCheck } from '@angular/core';
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
export class TabsComponent implements DoCheck {
	public label: string = 'Label';
	public caption: string = 'Caption';
	public readOnly: boolean = false;
	public disabled: boolean = false;
	public indeterminate: boolean = false;

	constructor(
        
    ) {

    }

	protected form = new FormGroup({
        checkbox: new FormControl(false),
    });

	public ngDoCheck(): void {
		console.log(this.form);
		console.log(this.form.value);
		console.log(this.disabled);
	}

	public setDisabled(): void {
		this.disabled = !this.disabled;

		if (this.disabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
        this.form.updateValueAndValidity();
	}

	public setReadOnly(): void {
		this.readOnly = !this.readOnly;
	}

	public setError(): void {

	}

	public setIndeterminate(): void {
		
	}
}
