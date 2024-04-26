import Image from "next/image";
import {
  CalendarDaysIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const BlogDetail = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-mainColor">
      <article className="lg:w-[600px] md:w-[600px] w-[400px] px-3 my-10  text-center">
        <div>
          <h1 className="font-semibold lg:text-2xl text-lg">
            Join us on December 6th & 7th for the INTERNATIONAL DAY OF PRAYER
            FOR MYANMAR
          </h1>
          <div className="flex flex-row justify-center items-center mt-5">
            <div className="flex flex-row items-center mx-5 lg:mx-10 md:mx-10">
              <CalendarDaysIcon
                width={15}
                height={15}
                color="red"
                className="mr-0 lg:mr-2 md:mr-2"
              />
              <time dateTime="2023-11-21">November 21, 2023</time>
              {/* <span>November 21, 2023</span> */}
            </div>

            <div className="flex flex-row items-center">
              <ChatBubbleOvalLeftEllipsisIcon
                width={15}
                height={15}
                color="red"
                className="mr-0 lg:mr-2 md:mr-2"
              />
              <span> No Comments</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Image
            src="/images/news.jpg"
            width={350}
            height={200}
            className="w-full"
            alt="article image"
          />
        </div>

        <div className="mt-5 flex flex-row justify-center">
          <Image
            src="/images/facebook.svg"
            alt="facebook logo"
            width={30}
            height={30}
            className="mx-2"
          />
          <Image
            src="/images/youtube.svg"
            alt="youtube logo"
            width={30}
            height={30}
            className="mx-2"
          />
          <Image
            src="/images/instagram.svg"
            alt="Instagram logo"
            width={35}
            height={35}
            className="mx-2"
          />
        </div>

        <div className="mt-5 text-left">
          <p>
            Myanmar is at a tipping point! In the midst of civil war and extreme
            darkness, God is BREAKING THOUGH and bringing light and hope to the
            people of Myanmar. Currently, violence is rampant (and increasing),
            more than a 1/3 of the nation is food insecure, the drug problem is
            destroying a generation and the largest trafficking event in the
            world is all happening in Myanmar right now. Gather your friends &
            family and join us to CONTEND for God to bring transformation in
            this forgotten nation.
          </p>
          <br />
          <p>
            We will be having 12 consecutive hours of prayer starting at 7:00pm
            CST in America on December 6th. The day will have hosted in-person
            prayer from 12 locations around the world that you are able to join
            in a Webinar format. Join us for 1 hour, or all 12 hours and please
            invite others to be a part of turning the tide. In order to
            participate, you must register (for free) to get access to the zoom
            link.
          </p>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
