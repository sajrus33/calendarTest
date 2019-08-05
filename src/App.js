import React from 'react';
import "./css/start.css";
import "./css/header.css";
import "./css/main.css";
import "./css/activities.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  return (
    <React.Fragment>
      <div className="modal">
        <div className="calendar">
          <section className="header flexRow">
            <h4 className="header__h">Terminplaner</h4>
            <span className="header__date">
              <a href="/#" className="header__a">
                <i className="fas fa-chevron-left"></i>
              </a>
              6 - 12. Juli 2015
          <a href="/#" className="header__a">
                <i className="fas fa-chevron-right"></i>
              </a>
            </span>
            <div className="header__tools flexCol">
              <a href="/#" className="header__tool">
                <i className="fas fa-text-width"></i>
              </a>
              <a href="/#" className="header__tool">
                <i className="fas fa-calendar-alt"></i>
              </a>
            </div>
          </section>
          <div className="main">
            <div className=" main__header">
              <div className="main__element main__element--header flexCol">
                Urzheit
          </div>
              <div className="main__element main__element--header flexCol">
                Mo 06.07.
          </div>
              <div className="main__element main__element--header flexCol">
                Di 07.07.
          </div>
              <div className="main__element main__element--header flexCol">
                Mi 08.07.
          </div>
              <div className="main__element main__element--header flexCol">
                Do 09.07.
          </div>
              <div className="main__element main__element--header flexCol">
                Fr 10.07.
          </div>
              <div className="main__element main__element--header flexCol">
                Sa 11.07.
          </div>
              <div className="main__element main__element--header flexCol">
                So 12.07.
          </div>
            </div>
            <div className="main__main">
              <div className="main__bookmark"></div>
              <div className="main__day">
                <div className="main__element main__element--hour">08:00</div>
                <div className="main__element main__element--hour">09:00</div>
                <div className="main__element main__element--hour">10:00</div>
                <div className="main__element main__element--hour">11:00</div>
                <div className="main__element main__element--hour">12:00</div>
                <div className="main__element main__element--hour">13:00</div>
                <div className="main__element main__element--hour">14:00</div>
                <div className="main__element main__element--hour">15:00</div>
                <div className="main__element main__element--hour">16:00</div>
              </div>
              <div className="main__day main__day--1">
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">08:30-09:15</span>
                  <p className="activity__p">Hessling</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">09:15-10:00</span>
                  <p className="activity__p">Mittermeier</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">10:00-10:45</span>
                  <p className="activity__p">Diederichs</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">10:45-11:15</span>
                  <p className="activity__p">Metzger</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">12:15-13:00</span>
                  <p className="activity__p">Mittermeier</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">13:00-13:45</span>
                  <p className="activity__p">Metzger</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>

                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
              </div>
              <div className="main__day main__day--2">
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">08:00-08:15</span>
                  <p className="activity__p">Meier</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">08:15-08:45</span>
                  <p className="activity__p">Augstein</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">08:45-9:15</span>
                  <p className="activity__p">Kuminek</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--blueL">
                  <span className="activity__hour">09:15-09:30</span>
                  <p className="activity__p">Erhardt</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <i className="far fa-smile activity__ico"></i>
                </div>
                <div className="main__activity main__activity--orange">
                  <span className="activity__hour">10:15-10:45</span>
                  <p className="activity__p">Lange</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                  <span className="activity__ico">! <i className="far fa-frown"></i></span>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">10:45-11:30</span>
                  <p className="activity__p">Schwabe</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">11:45-12:15</span>
                  <p className="activity__p">Buckmaster</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">12:15-12:45</span>
                  <p className="activity__p">Gheorghiu</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>

                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
              </div>
              <div className="main__day main__day--3">
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">08:00-08:30</span>
                  <p className="activity__p">Edler</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">08:30-09:30</span>
                  <p className="activity__p">Fusco</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">09:30-9:45</span>
                  <p className="activity__p">Gheorghiu</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">10:00-11:00</span>
                  <p className="activity__p">Dumont</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">11:15-11:30</span>
                  <p className="activity__p">Theodurescu</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">11:30-12:00</span>
                  <p className="activity__p">Tausend</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>

                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
              </div>
              <div className="main__day main__day--4">
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">08:45-09:15</span>
                  <p className="activity__p">Lanz</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">09:15-09:30</span>
                  <p className="activity__p">Gottschalk</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">10:15-10:30</span>
                  <p className="activity__p">Kleber</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">10:45-11:30</span>
                  <p className="activity__p">Bullhaupt</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">12:00-12:30</span>
                  <p className="activity__p">Anderssohn</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">12:45-13:15</span>
                  <p className="activity__p">Goethe</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
              </div>
              <div className="main__day main__day--5">
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">08:00-08:30</span>
                  <p className="activity__p">Schmidt</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">08:30-08:45</span>
                  <p className="activity__p">Westernhagen</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">09:30-09:45</span>
                  <p className="activity__p">Schmidt</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">10:00-10:45</span>
                  <p className="activity__p">Westernhagen</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">11:15-11:45</span>
                  <p className="activity__p">Wiebusch</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">12:00-12:30</span>
                  <p className="activity__p">Petry</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>
                <div className="main__activity main__activity--blue">
                  <span className="activity__hour">13:00-13:30</span>
                  <p className="activity__p">Petry</p>
                  <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                </div>

                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
              </div>
              <div className="main__day main__day--6">
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
              </div>
              <div className="main__day main__day--7">
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
                <div className="main__element main__element--hour"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
