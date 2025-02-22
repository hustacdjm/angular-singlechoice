import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector     : 'Component67b3fe0394d84c64a19d1902b7223958338b42dfaaddfc0f14510f9a',
    standalone   : true,
    templateUrl  : './Component67b3fe0394d84c64a19d1902b7223958338b42dfaaddfc0f14510f9a.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatRadioModule
    ]
    
})
export class Component67b3fe0394d84c64a19d1902b7223958338b42dfaaddfc0f14510f9a
{

    @Input() data:any;
    /**
     * Constructor
     */
     constructor(public sanitizer:DomSanitizer){}

}
