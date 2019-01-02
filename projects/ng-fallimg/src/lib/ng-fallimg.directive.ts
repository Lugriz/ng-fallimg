import { Directive, ElementRef, Input, HostListener, Inject } from '@angular/core';
import { NG_FALLIMG_SOURCES, IFallimgSource } from './ng-fallimg-sources';

/**
 * Directive for handling the default image when the main image doesn't works
 */

@Directive({
  selector: 'img[fallimg]'
})
export class NgFallimgDirective {

  /**
   * Input that receive an optional key for returning the source
   */

  @Input('fallimg') public fallimg: string;

  /**
   * It contains the last source setted when the main source fails
   */

  private lastSource: string;

  /**
   * 
   * @param el ElementRef service
   * @param fallimgSources Injector token that contains all the fallback sources
   */

  constructor(
    private el: ElementRef,
    @Inject( NG_FALLIMG_SOURCES ) private fallimgSources: IFallimgSource
  ) {}

  /**
   * It handles the error when the main image doesn't load
   */

  @HostListener('error')
  private errorImgHandler(): void {

    // The chosen source
    const source = this.fallimgSources[ this.fallimg || 'default' ];

    // Verify if the key exists in all fallback sources
    if (!source) {
      throw new Error(`ng-fallimg error: ${ this.fallimg } doesn't exist as a source or it is an empty source`);
    }

    // it checks if the charged source is different to the actual source, this avoid the infinite bucle creation
    if (source !== this.lastSource) {

      // It saves the last source for matching when the fallback source fails and retried, that avoid an infinite bucle
      this.lastSource = source;
      (this.el.nativeElement as HTMLImageElement).src = source;
      
    }
  }
}
