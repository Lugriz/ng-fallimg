import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { NgFallimgDirective } from './ng-fallimg.directive';
import { NG_FALLIMG_SOURCES, IFallimgSource } from './ng-fallimg-sources';

const SOURCES: any = {
  default: 'http://w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png',
  python:  'https://pythonprogramming.net/static/images/finance/python-programming-language.png',
  nothing: ''
};

describe('NgFallimgDirective', () => {

  let directive: NgFallimgDirective;
  let fallimgSrv: IFallimgSource;
  let el: ElementRef = new ElementRef( new Image() );

  el.nativeElement.setAttribute('fallimg', '');

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        {
          provide: NG_FALLIMG_SOURCES,
          useValue: SOURCES
        }
      ]
    });


    fallimgSrv = TestBed.get( NG_FALLIMG_SOURCES );

    directive = new NgFallimgDirective( el, fallimgSrv );

  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set the default source', () => {

    expect( fallimgSrv[ directive.fallimg || 'default' ] ).toEqual( SOURCES.default );

  });

  it('should be nonexistent source', () => {

    directive.fallimg = 'notExists';

    expect( fallimgSrv[ directive.fallimg ] ).toBeUndefined();

  });

  it('should be the python key source', () => {

    directive.fallimg = 'python';

    expect( fallimgSrv[ directive.fallimg ] ).toEqual( SOURCES.python );

  });

  it('should be invalid source', () => {

    directive.fallimg = 'nothing';

    expect( fallimgSrv[ directive.fallimg ] ).toEqual('');

  });

  it('should has fallimg property', () => {

    expect( el.nativeElement.hasAttribute('fallimg') ).toBeTruthy();

  });

});
