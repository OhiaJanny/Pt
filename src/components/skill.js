import React from 'react'

const Skill = () => {
    return (
      <div
        className="mx-auto"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        <span style={{textAlign: 'center'}}>My Experience</span>
        <div style={{ width: "18rem" }}>
          <div className="card-body">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div className="My Experience">
                      <h1>My Experience</h1>
                    </div>
                    Suretrip.ng Project
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Conducted research projects, Wireframing, designs and
                      prototype.
                    </strong>{" "}
                    Implemented Design strategies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div style={{ width: "18rem" }}>
          <div className="card-body">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Triisum Project
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Conducted research projects, Wireframing, designs and
                      prototype.
                    </strong>{" "}
                    Implemented Design strategies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "18rem" }}>
          <div className="card-body">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Kartlog.netify project
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Conducted research projects, Wireframing, designs and
                      prototype.
                    </strong>{" "}
                    Implemented Design strategies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skill