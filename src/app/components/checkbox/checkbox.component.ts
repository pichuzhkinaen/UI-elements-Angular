import {
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
	Self,
	Optional,
	ElementRef,
	Renderer2,
} from '@angular/core';
import {
    DefaultValueAccessor,
    FormControl,
    NgControl
} from '@angular/forms';


@Component({
	standalone: true,
	selector: 'app-checkbox',
	imports: [],
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent extends DefaultValueAccessor implements OnInit {
	@Output() indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() label: string = '';
	@Input() caption: string = '';
	@Input() readOnly: boolean = false;

	private _value: boolean = false;
    @Input() set value(value: boolean) {
        this._value = value;
    }
    public get value(): boolean {
		console.log(this.control);
		console.log(this.control.value);
        return !!this.control.value;
    }

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
		private readonly renderer: Renderer2,
        private readonly elementRef: ElementRef<HTMLElement>,
		private readonly cd: ChangeDetectorRef,
		@Self()
        @Optional()
        public readonly control: NgControl,
	) {
		super(renderer, elementRef, true);
		this.control.valueAccessor = this;
	}

	public ngOnInit(): void {
		console.log(this.control.value);
		
	}

	public checkboxChanged(): void {
		if (this.indeterminate) {
			this.indeterminateChange.emit(this.indeterminate);
		}
	}
}
