import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function category() {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-half">
              <div className="has-text-centered">
                <div>
                  <h1 className="title has-text-centered is-3">
                    {" "}
                    veuillez choisir catégorie
                  </h1>

                  <>
                    <div>
                      Sélect Difficulty:
                      <Link to="/category=easy">
                        <button
                          className="button is-primary is-inverted is-outlined is-rounded is-fullwidth mt-2"
                          onClick={""}
                        >
                          Facile
                        </button>
                      </Link>
                      <Link to="/category=medium">
                        <button
                          className="button is-primary is-inverted is-outlined is-rounded is-fullwidth mt-2"
                          onClick={""}
                        >
                          Moyen
                        </button>
                      </Link>
                      <Link to="/category=hard">
                        <button
                          className="button is-primary is-inverted is-outlined is-rounded is-fullwidth"
                          onClick={""}
                        >
                          Difficile
                        </button>
                      </Link>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
