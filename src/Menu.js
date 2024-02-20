import { isClickableInput } from "@testing-library/user-event/dist/utils";

function Menu() {
  return (
    <div className="menu">
      <h1>Do it all with Adobe Creative Cloud.</h1>
      <p>
        Make anything you can imagine, from gorgeous images, graphics, and art
        to standout social posts, videos, PDFs, and more. Get 20+ apps
      </p>
      <p>
        in the All Apps plan plus generative AI tools powered by Adobe Firefly.
      </p>
      <button>Free Trial</button>

      <a href="">See all plans </a>
      <div className="brick">
        <div className="left-contain">
          <h2>Adobe Photoshop, powered by Firefly.</h2>
          <p>
            Now with generative Fill and Generative Expand, you can add, remove,
            or extend content in any image automagically.
          </p>
          <button>Start Free Trial</button>
          <img src="pic/rightpic.png" alt="Alt" className="menu-image" />
        </div>
        <div className="right-contain">
          <h2>Adobe Express, powered by Firefly</h2>
          <p>
            Get Started with the all-in-one, content creation app and new
            generative AI features like Generative Fill, Text to Image, and Text
            to Template.
          </p>
          <button>Get Adobe Express free</button>
          <img src="pic/leftpic.png" alt="Alt" className="menu-image" />
        </div>
        <div className="grid-container">
          <div className="grid-item-1">
            <h2>Adobe Illustrator, powered by Firefly.</h2>
            <p>
              Transform texxt prompts into editable vector graphics with Text to
              Vector Graphic
            </p>
            <img src="pic/1stgrids.png" alt="Alt" className="grid-image1" />
          </div>
          <div className="grid-item2">
            <h2>Get it done with Acrobat.</h2>
            <p>
              Edit, share, and e-sign PDFs - all in one place. Acrobat's got it.
            </p>
            <img src="pic/2ndgrid.png" alt="Alt" className="grid-image2" />
          </div>
          <div className="grid-item3">
            <div className="gradient-part"></div>
            <div className="middle">
              <h3 id="creative-cloud" className="heading-m">
                Creative cloud
              </h3>
              <p class="body-xs">Creative Cloud All Apps free trial</p>
              <p class="body-xs">Creative Cloud for business</p>
              <p class="body-xs">Student pricing - save over 60%</p>
            </div>
            <div>
              <h3>Acrobat</h3>
              <p>Acrobat free trial</p>
              <p> Online PDF tools</p>
              <h3>Explore</h3>
              <p>View all products</p>
              <p>See all plans and pricing</p>
            </div>
          </div>
          <div className="grid-item4">
            <h3>Amazing apps, Endless possibilities.</h3>
            <p>
              Create something beautiful, boost productivity, and deliver
              engaging experiences with Adobe software
            </p>
            <h5>View products</h5>
            <img src="pic/4thgrid.png" alt="Alt" className="grid-image4" />
          </div>
          <div className="grid-item5">
            <h4>ADOBE SUMMIT | MAR 25-28,2024</h4>
            <h3>Get ready for Adobe Summit.</h3>
            <p>
              Come together with global Experience Makers to explore the future
              of customer experience. Join us in Las Vegas or watch online.
            </p>
            <h5>Register now</h5>
            <img src="pic/5thgrid.jpg" alt="Alt" className="grid-image5" />
          </div>
          <div className="grid-item6">
            <div className="gitna">
              <p style={{ color: "white" }}>IN THE NEWS</p>
            </div>
            <h4>Introducing major audio updates in Premiere Pro.</h4>
            <p>Intuitive audio workflow debuts ahead of 2024 Sundace Film</p>
            <h5>Read the story</h5>
            <hr></hr>
            <h4>Adobe recognized in TIME Best Investions of 2023.</h4>
            <p>
              Photoshop generative AI features and Adobe Liquid Mode mae TIMES's
              top 200.
            </p>
            <h5>Read the story</h5>
            <hr></hr>
            <h4>Adobe MAX: The future of creativity and generative AI</h4>
            <p>
              Discover groundbreaking innovations that redefine creative
              workflows.
            </p>
            <h5>Read the story</h5>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
