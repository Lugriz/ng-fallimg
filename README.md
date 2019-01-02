# ng-fallimg

Set a default image when the main source on the image tag doesn't work

## Installation

> $ npm install ng-fallimg --save

## Usage

import the **NgFallimgModule** module and use the static **forRoot** method in the root module (The **forRoot** method must be used in the root module), in other modules you only need to import **NgFallimgModule** without using the **forRoot** method to use the **fallimg** directive. Pass an object with the resources that you need.

> **Note:** The default property is required, the forRoot method requires at least an object with a default property.

```javascript
import { NgFallimgModule } from 'ng-fallimg';

@NgModule({
  ...

  imports: [
    BrowserModule,
    NgFallimgModule.forRoot({
      default: 'https://domain.com/mypicture.png',
      picture1:  'assets/mypicture.png',
      picture2: 'data:image/jpeg;base64, ... ',
    })
  ],

  ...
})
export class AppModule { }
```

The object to pass to the **forRoot** method supports: local URLs, external URLs and base64.

once imported the **NgFallimgModule** module, you can use the **fallimg** directive on the img tags:

```javascript
    <img width="100px" src="http://domain.com/the/image/fails" fallimg>
```

When the main image (defined in the src property) fails and the **fallimg** property doesn't have a value, it gets the default resource ('https://domain.com/mypicture.png') defined in the object passed in the **forRoot** method

you can select the resource to load when the main image fails, defining the property's name:

```javascript
    <img width="100px" src="http://domain.com/the/image/fails" fallimg="picture1">
```

Now, when the main image fails, picture1 will be loaded ('assets/mypicture.png').

## Issues

> [https://github.com/Lugriz/ng-fallimg/issues](https://github.com/Lugriz/ng-fallimg/issues)

## Contributing

### Clone the repository
[https://github.com/Lugriz/ng-fallimg](https://github.com/Lugriz/ng-fallimg)

### install the dependencies
> $ npm install

### run the test to the library 
> $ npm run test:lib

### Modify the library
Enter to *projects/ng-fallimg/src/lib* and modify the library

### Build the library
> $ npm run build:lib

### testing before of pull request
Go to *app.component.html* and test your changes
