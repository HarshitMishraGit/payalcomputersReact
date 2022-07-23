import React from "react";
// import CrouselScroll from "./CrouselScroll";
import Slide from "react-reveal/Slide";
import Card from "./Card";
import Intro from "./Intro";
let content = [
  {
    title: "Flex/Banner",
    lable: "Designing and Printing",
    content:
      "Now a days, Banner are the first impression to everyone for your business purposes or for advertisement. We design the banner suitable for your expectation or even more than that. We have a vast variety For banner designing. For getting started",
  },
  {
    title: "Poster",
    lable: "Designing and Printing",
    content:
      "Posters are the major part for your advertisement in your local area or on the website you own . These are attractive and fully informative about your goals. We design poster that you love . For more details",
  },
  {
    title: "Visiting Card",
    lable: "Designing and Printing",
    content:
      "You are on the go and you meet someone (want to introduced youself) In this situation If you want a short summary about yourself ( Like your name, occuspasion , Contact details) Just Give a visiting Card. We design the visiting Card for you that describe you even more that your tung. For more details",
  },
  {
    title: "Wedding Card",
    lable: "Designing and Printing",
    content:
      "Weeding ceremony has memorable for everyone in life . As if you Want to make it more memorable , wedding ceremony and will be your key point. A beautiful and attractive wedding card make you feel even more glad among your friends , family and business partner. As it is invitation itself. For more details",
  },
];
function Home() {
  return (
    <div className="dark:bg-slate-900/75 duration-700">
      {/* <CrouselScroll /> */}
      <Intro />
      <hr className="my-5 text-gray-700 text-sm border-4 border-gray-700"></hr>

      <div className="scrolling_Content mt-4">
        <div className="flex flex-col md:flex-row md:space-x-2 justify-center card-1 mt-4 w-full mx-2">
          <Slide duration={2000} left >
            <img alt="Content_image"
              src={process.env.PUBLIC_URL + "img3.png"}
              className="md:w-1/2  bg-orange-200 shadow-md border-0 rounded-lg md:p-3 mx-4"
            ></img>
          </Slide>
          <Slide duration={2000} right >
            <Card
              lable={content[0].lable}
              title={content[0].title}
              content={content[0].content}
            />
          </Slide>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:space-x-2 justify-center card-1 mt-4 w-full mx-2">
          <Slide duration={2000} left >
            <Card
              lable={content[1].lable}
              title={content[1].title}
              content={content[1].content}
            />
          </Slide>
          <Slide duration={2000} right >
            <img alt="Content_image"
              src={process.env.PUBLIC_URL + "img1.png"}
              className="md:w-1/2  bg-gray-200 shadow-md border-0 rounded-lg md:p-3 mx-4"
            ></img>
          </Slide>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-2 justify-center card-1 mt-4 w-full mx-2">
          <Slide duration={2000} left >
            <img alt="Content_image"
              src={process.env.PUBLIC_URL + "visitingcard.png"}
              className="md:w-1/2  bg-white shadow-md border-0 rounded-lg md:p-3 mx-4"
            ></img>
          </Slide>
          <Slide duration={2000} right >
            <Card
              lable={content[2].lable}
              title={content[2].title}
              content={content[2].content}
            />
          </Slide>
              </div>
              <div className="flex flex-col-reverse md:flex-row md:space-x-2 justify-center card-1 mt-4 w-full mx-2">
          <Slide duration={2000} left >
            <Card
              lable={content[3].lable}
              title={content[3].title}
              content={content[3].content}
            />
          </Slide>
          <Slide duration={2000} right >
            <img alt="Content_image"
              src={process.env.PUBLIC_URL + "weddingimg.png"}
              className="md:w-1/2  bg-gray-200 shadow-md border-0 rounded-lg md:p-3 mx-4 "
            ></img>
          </Slide>
              </div>
        
      </div>
    </div>
  );
}

export default Home;
