import {
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements OnInit {
	@Output() indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() label: string = '';
	@Input() caption: string = '';
	@Input() readOnly: boolean = false;

	public value!: string;


	private _indeterminate: boolean = false;
		@Input() get indeterminate(): boolean {
		return this._indeterminate;
	}
	set indeterminate(value: boolean) {
		this._indeterminate = value;
		this.cd.markForCheck();
		this.indeterminateChange.emit(this._indeterminate);
	}


	constructor(
		private readonly cd: ChangeDetectorRef,
	) {
		
	}

	public ngOnInit(): void {
		
	}

	public checkboxChanged(): void {
		if (this.indeterminate) {
			this.indeterminateChange.emit(this.indeterminate);
		}
	}
}
