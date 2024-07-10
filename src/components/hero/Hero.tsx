import { Carousel } from "antd";

const Hero = () => {
  const carouselContent = [
     
    {
      img: "h2",
      heading: "Unleash Your Potential, Gear Up for Success",
      description:
        "Discover our range of products designed to enhance your workouts. From hydration to recovery, we have everything you need to stay fit and healthy",
      buttonText: "Shop Now",
    },
    {
      img: "h3",
      heading: "The best fitness accessories tailored to your needs",
      description:
        "Discover our range of products designed to enhance your workouts. From hydration to recovery, we have everything you need to stay fit and healthy",
      buttonText: "Buy Now",
    },
    {
      img: "h4",
      heading: "Empower Your Fitness Journey, Train Like a Pro",
      description:
        "Explore our wide range of fitness accessories, including wearable tech, recovery tools, and home gym essentials. Stay motivated and track your progress with our latest gear",
      buttonText: "Explore Collection",
    },
  ];
  return (
    <Carousel autoplay>
      <section
        className={`hero-section h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gray-800 text-white py-20 bg-[url('@/assets/banner/h1.jpg')] `}
      >
        <div className="container mx-auto px-6 text-center  py-20 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Unleash Your Potential, Gear Up for Success</h1>
          <p className="text-xl mb-6">
            Discover top-notch fitness accessories designed to take your
            workouts to the next level.
          </p>
          <a
            href="/shop"
            className="bg-primary text-xl  font-bold hover:bg-white  hover:text-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90"
          >
            Shop Now
          </a>
  
        </div>
      </section>
      <section
        className={`hero-section h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gray-800 text-white py-20 bg-[url('@/assets/banner/h1.jpg')] `}
      >
        <div className="container mx-auto px-6 text-center  py-20 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Empower Your Fitness Journey, Train Like a Pro</h1>
          <p className="text-xl mb-6">
          Explore our wide range of fitness accessories, including wearable tech, recovery tools, and home gym essentials. Stay motivated and track your progress with our latest gear
          </p>
          <a
            href="/shop"
            className="bg-primary text-xl font-bold hover:bg-white  hover:text-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90"
          >
            Shop Now
          </a>
  
        </div>
      </section>
      <section
        className={`hero-section h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gray-800 text-white py-20 bg-[url('@/assets/banner/h1.jpg')] `}
      >
        <div className="container mx-auto px-6 text-center  py-20 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">The best fitness accessories tailored to your needs</h1>
          <p className="text-xl mb-6">
            Discover top-notch fitness accessories designed to take your
            workouts to the next level.
          </p>
          <a
            href="/shop"
            className="bg-primary text-xl font-bold hover:bg-white  hover:text-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90"
          >
            Shop Now
          </a>
  
        </div>
      </section>
      <section
        className={`hero-section h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gray-800 text-white py-20 bg-[url('@/assets/banner/h1.jpg')] `}
      >
        <div className="container mx-auto px-6 text-center  py-20 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Unleash Your Potential, Gear Up for Success</h1>
          <p className="text-xl mb-6">
            Discover top-notch fitness accessories designed to take your
            workouts to the next level.
          </p>
          <a
            href="/shop"
            className="bg-primary  text-xl font-bold hover:bg-white  hover:text-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90"
          >
            Shop Now
          </a>
  
        </div>
      </section>
      
    </Carousel>
  );
};

export default Hero;
