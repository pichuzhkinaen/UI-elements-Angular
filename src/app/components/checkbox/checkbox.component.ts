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
    CheckboxControlValueAccessor,
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
export class CheckboxComponent extends CheckboxControlValueAccessor implements OnInit {
	@Output() indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() label: string = '';
	@Input() caption: string = '';
	@Input() readOnly: boolean = false;

	
    public set value(value: boolean) {
        this._value = value;
    }
    public get value(): boolean {
        return !!this.control.value;
    }

	private _indeterminate: boolean = false;
		@Input() get indeterminate(): boolean {
		return this._indeterminate;
	}
	
	public set indeterminate(value: boolean) {
		this._indeterminate = value;
		this.cd.markForCheck();
		this.indeterminateChange.emit(this._indeterminate);
	}

	public get disabled(): boolean {
		this._disabled = !!this.control.disabled;
        return this._disabled;
    }

    @Input()
    public set disabled(value: boolean) {
        this._disabled = value;
        this.cd.markForCheck();
    }

	private _value: boolean = false;
	private _disabled: boolean = false;

	constructor(
		private readonly renderer: Renderer2,
        private readonly elementRef: ElementRef<HTMLElement>,
		private readonly cd: ChangeDetectorRef,
		@Self()
        @Optional()
        public readonly control: NgControl,
	) {
		super(renderer, elementRef);
		this.control.valueAccessor = this;
	}

	public ngOnInit(): void {
		this.control.control?.updateValueAndValidity();
	}

	public checkboxChanged(): void {
		if (this.indeterminate) {
			this.indeterminateChange.emit(this.indeterminate);
		}
	}

	public override setDisabledState(): void {
        this.cd.markForCheck();
    }
}
