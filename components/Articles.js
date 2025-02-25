import Link from "next/link";
import Image from "next/image";
function Articles() {
  return (
    <div className="fluid-container">
      <h3>Latest articles</h3>
      <p>
        I write articles on web development, including links to resources. Check
        out my latest article..
      </p>
      {/* <div className="slider-container">
        <div className="slider">
          <div className="slides"> */}
      <div className="slide">
                          
        <Image
          id={"image-1"}
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="engineering"
          width={380}
          height={200}
        />
        <h4>Web Developement for beginners</h4>
        <em>
          Learning web development can be an exciting journey. This article will
          guide you from the beginning.
        </em>
        <Link href={"/blog"} className="slate-blue">
          Read
          <Image
            src={"/arrow-forward-sharp.svg"}
            width={20}
            height={20}
            alt="forward arrow"
          />
        </Link>
        <hr />
        <div className="blog-footer">
          <span className="blog-footer-text"> Jeffery Agyepong</span>

          <span className="blog-footer-text">
            {" "}
            <time datetime="2025-01-13">January 13, 2025</time>
          </span>
        </div>
      </div>
    </div>
    //     </div>
    //   </div>
    //   {/* <div id="controls">
    //     <label for="frame1"></label>
    //     <label for="frame2"></label>
    //   </div>
    //   <div id="bullets">
    //     <label for="frame1"></label>
    //     <label for="frame2"></label>
    //   </div> */}
    //
    // </div>
  );
}
export default Articles;
