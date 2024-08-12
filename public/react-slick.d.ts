// src/react-slick.d.ts
declare module 'react-slick' {
    import * as React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      [key: string]: any;
    }
  
    class Slider extends React.Component<Settings, any> {}
  
    export = Slider;
  }
  