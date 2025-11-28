const GridGallery = () => {
  return (
    <section
      className="banner-images grid 
      grid-cols-2 grid-rows-2 
      lg:grid-cols-4 lg:grid-rows-1 
      lg:h-[447px] h-[378px] w-screen"
    >
      <div
        className="lg:col-1 lg:row-1 
        bg-cover bg-center bg-no-repeat 
        bg-[url('assets/images/mobile/image-gallery-milkbottles.jpg')] 
        lg:bg-[url('assets/images/desktop/image-gallery-milkbottles.jpg')] "
      ></div>
      <div
        className="lg:col-start-2 lg:row-1 
        row-start-1 col-2 
        bg-cover bg-center bg-no-repeat 
        bg-[url('assets/images/mobile/image-gallery-orange.jpg')] 
        lg:bg-[url('assets/images/desktop/image-gallery-orange.jpg')] "
      ></div>
      <div
        className="lg:col-start-3 lg:row-1 
        row-start-2 col-1
        bg-cover bg-center bg-no-repeat 
        bg-[url('assets/images/mobile/image-gallery-cone.jpg')] 
        lg:bg-[url('assets/images/desktop/image-gallery-cone.jpg')] "
      ></div>
      <div
        className="lg:col-start-4 lg:row-1 
        row-start-2 col-2
        bg-cover bg-center bg-no-repeat 
        bg-[url('assets/images/mobile/image-gallery-sugar-cubes.jpg')]
        lg:bg-[url('assets/images/desktop/image-gallery-sugarcubes.jpg')]"
      ></div>
    </section>
  );
};
export default GridGallery;
