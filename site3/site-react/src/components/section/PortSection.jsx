import React from 'react';

const portText = [
  {
    portImg: './assets/images/port/230511thu.jpg',
    title: 'Sydney Opera Mask',
    desc: '-230511thu',
  },
  {
    portImg: './assets/images/port/230512fri.jpg',
    title: 'Brush of the Wild',
    desc: '-230512fri',
  },
  {
    portImg: './assets/images/port/230522mon1.jpg',
    title: 'Breathing',
    desc: '-230522mon1',
  },
];

const portText2 = [
  {
    portImg: './assets/images/port/230414fri1.jpg',
    title: 'Fuku1 Grand Prix',
    desc: '-230414fri1',
  },
  {
    portImg: './assets/images/port/230421fri1.jpg',
    title: 'Sweet Mario Bros',
    desc: '-230421fri1',
  },
  {
    portImg: './assets/images/port/230307tue.jpg',
    title: 'Barrel Sauna',
    desc: '-230307tue',
  },
];

const portTitle = { title: 'MINIATURE CALENDAR' };
function IntroDesc({ portImg, title, desc }) {
  return (
    <div className="port">
      <figure className="port__header">
        <img src={portImg} alt={desc} />
      </figure>
      <div className="port__body">
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>{portTitle.title}</h3>
      <div className="port__inner container center">
        <div className="port__btn"></div>
        <div className="port__cont">
          <div>
            {portText.map((text, index) => (
              <IntroDesc
                key={index}
                portImg={text.portImg}
                title={text.title}
                desc={text.desc}
              />
            ))}
            ;
            {/* <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230511thu.jpg" alt="230511thu" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Sydney Opera Mask</h4>
                  <p>-230511thu</p>
                </div>
              </div>
            </div> */}
            {/* <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230512fri.jpg" alt="230512fri" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Brush of the Wild</h4>
                  <p>-230512fri</p>
                </div>
              </div>
            </div> */}
            {/* <div className="port">
              <figure className="port__header">
                <img
                  src="./assets/images/port/230522mon1.jpg"
                  alt="230522mon1"
                />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Breathing</h4>
                  <p>-230522mon1</p>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            {portText2.map((text, index) => (
              <IntroDesc
                key={index}
                portImg={text.portImg}
                title={text.title}
                desc={text.desc}
              />
            ))}
            ;
            {/* <div className="port">
              <figure className="port__header">
                <img
                  src="./assets/images/port/230414fri1.jpg"
                  alt="230414fri1"
                />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Fuku1 Grand Prix</h4>
                  <p>-230414fri1</p>
                </div>
              </div>
            </div> */}
            {/* <div className="port">
              <figure className="port__header">
                <img
                  src="./assets/images/port/230421fri1.jpg"
                  alt="230421fri1"
                />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Sweet Mario Bros</h4>
                  <p>-230421fri1</p>
                </div>
              </div>
            </div> */}
            {/* <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230307tue.jpg" alt="230307tue" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Barrel Sauna</h4>
                  <p>-230307tue</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortSection;
