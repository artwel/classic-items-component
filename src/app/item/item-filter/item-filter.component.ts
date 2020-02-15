import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Slots} from '../../../../generated-sources/openapi';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss']
})
export class ItemFilterComponent implements OnInit {

  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;

  slots = Object.keys(Slots);
  owns = [{label: 'all', value: null}, {label: 'yes', value: 'yes'}, {label: 'no', value: 'no'}];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  slot(): FormControl {
    return this.formGroup.get('slot') as FormControl;
  }

  own(): FormControl {
    return this.formGroup.get('own') as FormControl;
  }

  slotValue(): Slots[] {
    return this.slot().value;
  }

  ownValue(): boolean {
    const value = this.own().value;
    if (value === 'all') {
      return null;
    } else {
      return value === 'yes';
    }
  }

  onFilterChange() {
    console.log(this.formGroup.value);
    this.filterChange.emit(this.formGroup.value);
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      own: ['all'],
      slot: [null]
    });
  }

}
