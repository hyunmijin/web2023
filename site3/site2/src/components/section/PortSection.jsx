function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>MINIATURE CALENDAR</h3>
      <div className="port__inner container center">
        <div className="port__btn"></div>
        <div className="port__cont">
          <div>
            <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230511thu.jpg" alt="230511thu" />
              </figure>
              <div className="port__body">
                {/* <!-- <span>
                            <img src="images/shareboard-profile2.png" alt="">
                        </span> --> */}
                <div>
                  <h4>Sydney Opera Mask</h4>
                  <p>-230511thu</p>
                </div>
              </div>
            </div>
            <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230512fri.jpg" alt="230512fri" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Brush of the Wild</h4>
                  <p>-230512fri</p>
                </div>
              </div>
            </div>
            <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230522mon1.jpg" alt="230522mon1" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Breathing</h4>
                  <p>-230522mon1</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230414fri1.jpg" alt="230414fri1" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Fuku1 Grand Prix</h4>
                  <p>-230414fri1</p>
                </div>
              </div>
            </div>
            <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230421fri1.jpg" alt="230421fri1" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Sweet Mario Bros</h4>
                  <p>-230421fri1</p>
                </div>
              </div>
            </div>
            <div className="port">
              <figure className="port__header">
                <img src="./assets/images/port/230307tue.jpg" alt="230307tue" />
              </figure>
              <div className="port__body">
                <div>
                  <h4>Barrel Sauna</h4>
                  <p>-230307tue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortSection;
