import React from "react";


Const Card: React.FC<({ data }: {
  data.map();
  return (
    <Fragment>
      <div className="row">
        <div className="wrap card">
          <div className="img">
            {/* <img src="%PUBLIC_URL%/xservices1.jpg" /> */}
            <img src={pic1} />
          </div>
          <div>
            <h4>
              <span>Map Direction</span>
            </h4>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <p>
              <Button>Read more</Button>
            </p>
          </div>
        </div>
        <div>
          <div className="img">
            {/* <img src="%PUBLIC_URL%/xservices1.jpg" /> */}
            <img src={pic2} />
          </div>
          <div>
            <h4>
              <span>Accomodation Services</span>
            </h4>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <p>
              <Button>Read more</Button>
            </p>
          </div>
        </div>
        <div>
          <div className="img">
            {/* <img src="%PUBLIC_URL%/xservices1.jpg" /> */}
            <img src={pic3} />
          </div>
          <div>
            <h4>
              <span>Map Direction</span>
            </h4>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <p>
              <Button>Read more</Button>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
