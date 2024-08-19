import Link from "next/link";
import Image from "next/image";
 function Articles() {
  return (
    <div className="fluid-container">
      <h3>Latest articles</h3>
      <p>I write articles on web development, including links to resources. Check out my latest article..</p>
      <nav>
        
        <Link href={"#image-1"} className="nav-arrow">
          <Image
            src="/arrow-back-circle-outline.svg"
            alt="Coast Republic"
            width={20}
            height={20}
          />
        </Link>
        <Link href={"#image-2"} className="nav-arrow">
          <Image
            src="/arrow-forward-circle-outline.svg"
            alt="Coast Republic"
            width={20}
            height={20}
          />
        </Link>
      
      </nav>
      <div className="list-wrapper">
        <div className="list">
          <div className="item">
            <div className="content">
              <Image
                id={"image-1"}
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="engineering"
                width={380}
                height={200}
              />
            </div>
            <div>
              <h4>Learn Web Developement</h4>
              <p>
                Learning web development can be an exciting journey. This
                article will guide you from beginner.
              </p>
              <Link href="/blog" className="slate-blue">
                Read
                <Image
                  src={"/arrow-forward-sharp.svg"}
                  width={20}
                  height={20}
                  alt="forward arrow"
                />
              </Link>
            </div>

            <hr />
            <div className="blog-footer">
              <span className="blog-footer-text"> Jeffery Agyepong</span>
              <span className="blog-footer-text">February 03, 2024</span>
            </div>
          </div>
          <div className="item">
            <div className="content">
              {" "}
              <Image
                id={"image-2"}
                src="logo-html5.svg"
                alt="html logo"
                width={180}
                height={100}
              />
            </div>
            <div>
              <h4>HTML 5</h4>
              <p>HTML (HyperText Markup Language). Everything you need to know about the struct of the web technology languages</p>
              <Link href="#" className="slate-blue">
                Read
                <Image
                  src={"/arrow-forward-sharp.svg"}
                  width={20}
                  height={20}
                  alt="forward arrow"
                />
              </Link>
            </div>

            <hr />
            <div className="blog-footer">
              <span className="blog-footer-text"> Jeffery Agyepong</span>
              <span className="blog-footer-text">February 03, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
