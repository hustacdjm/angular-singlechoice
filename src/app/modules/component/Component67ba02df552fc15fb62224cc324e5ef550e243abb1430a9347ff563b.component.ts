import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector     : 'Component67ba02df552fc15fb62224cc324e5ef550e243abb1430a9347ff563b',
    standalone   : true,
    templateUrl  : './Component67ba02df552fc15fb62224cc324e5ef550e243abb1430a9347ff563b.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatRadioModule
    ]
    
})
export class Component67ba02df552fc15fb62224cc324e5ef550e243abb1430a9347ff563b
{

    @Input() data:any;
    /**
     * Constructor
     */
     constructor(public sanitizer:DomSanitizer){}

     // Handle the change event
    onAnswerChange(event: any) {
        const selectedValue = event.value; // Get the selected value from the event
        this.data.runtime.data.answer = selectedValue; // Update the answer
        console.log('Selected Answer:', this.data.runtime.data.answer); // Optional: Log the selected answer
    }

}
