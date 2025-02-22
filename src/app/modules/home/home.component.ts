import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, MatIconModule,
        MatIconModule,  CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
        MatInputModule, MatRadioModule],
})
export class LandingHomeComponent implements AfterContentInit
{

    /**
     * Constructor
     */
    constructor(private componentFactoryResolver: ComponentFactoryResolver)
    {



    }
  

    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
   

    template={
  "name" : "SingleChoice",
  "description" : "single choice component",
  "version" : "2.0"
};
  
    reactiveComponent={
  "component" : {
    "componentTemplateId" : "67b3c5af94d84c64a19d18ff",
    "templateDeployId" : null,
    "content" : {
      "question" : "<p>What's the question?</p>",
      "options" : [ {
        "key" : "1",
        "value" : "option 1"
      }, {
        "key" : "2",
        "value" : "option 2"
      } ],
      "rightanswer" : "1"
    },
    "ui" : { },
    "scores" : [ ]
  },
  "runtime" : {
    "data" : {
      "answer" : null
    }
  }
};



    async ngAfterContentInit() {
      
      this.StartTest();

    }

   
    async StartTest(){
      
        const componentModule = await import('../component/Component67b3fe0394d84c64a19d1902b7223958338b42dfaaddfc0f14510f9a.component');
        const TemplateComponent = componentModule['Component67b3fe0394d84c64a19d1902b7223958338b42dfaaddfc0f14510f9a'];

        this.testContainer.clear();

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateComponent);

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(componentFactory);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

}
