/**
 * Injector token constant that contains all the fallback sources 
 */

export const NG_FALLIMG_SOURCES = 'NG_FALLIMG_SOURCES';

/**
 * Interface that define the object to pass to charged the fallback sources
 */

export interface IFallimgSource {
    default: string;
    [extraProps: string]: string
}
