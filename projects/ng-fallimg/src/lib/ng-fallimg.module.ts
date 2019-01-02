import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgFallimgDirective } from './ng-fallimg.directive';
import { NG_FALLIMG_SOURCES, IFallimgSource } from './ng-fallimg-sources';

@NgModule({
  declarations: [NgFallimgDirective],
  exports: [NgFallimgDirective]
})
export class NgFallimgModule { 
  
  /**
   * @param sources All the fallback sources
   */
  
  static forRoot(sources: IFallimgSource): ModuleWithProviders {
    return {
      ngModule: NgFallimgModule,
      providers: [
        {
          provide: NG_FALLIMG_SOURCES,
          useValue: sources
        }
      ]
    };
  }
}
