import pkg  from 'gulp';

const { src } = pkg

export function vendorJS ()
{
  const modules = [
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/swiper/swiper-bundle.min.js.map',
  ];

  return src(modules)
    .pipe(app.gulp.dest("dist/js"));
};

export function vendorCSS() {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.css',
  ];

  return src(modules)
    .pipe(app.gulp.dest('dist/css/pages'));
};