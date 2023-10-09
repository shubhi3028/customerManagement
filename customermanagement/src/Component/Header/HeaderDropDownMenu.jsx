import React from "react";
const HeaderDropDownMenu=()=>{
    const design=(
        <>
              <div className="dropdown morphing scale-left notifications">
        <a
          className="nav-link dropdown-toggle after-none"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <span className="d-none d-xl-block me-2 text-center">Alerts</span>
          <svg
            className="d-inline-block d-xl-none"
            viewBox="0 0 16 16"
            width="18px"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1.91802L7.203 2.07902C6.29896 2.26322 5.48633 2.75412 4.90265 3.46864C4.31897 4.18316 4.0001 5.07741 4 6.00002C4 6.62802 3.866 8.19702 3.541 9.74202C3.381 10.509 3.165 11.308 2.878 12H13.122C12.835 11.308 12.62 10.51 12.459 9.74202C12.134 8.19702 12 6.62802 12 6.00002C11.9997 5.07758 11.6807 4.18357 11.097 3.46926C10.5134 2.75494 9.70087 2.26419 8.797 2.08002L8 1.91802ZM14.22 12C14.443 12.447 14.701 12.801 15 13H1C1.299 12.801 1.557 12.447 1.78 12C2.68 10.2 3 6.88002 3 6.00002C3 3.58002 4.72 1.56002 7.005 1.09902C6.99104 0.959974 7.00638 0.819547 7.05003 0.686794C7.09368 0.554041 7.16467 0.43191 7.25842 0.328279C7.35217 0.224647 7.4666 0.141815 7.59433 0.085125C7.72206 0.028435 7.86026 -0.000854492 8 -0.000854492C8.13974 -0.000854492 8.27794 0.028435 8.40567 0.085125C8.5334 0.141815 8.64783 0.224647 8.74158 0.328279C8.83533 0.43191 8.90632 0.554041 8.94997 0.686794C8.99362 0.819547 9.00896 0.959974 8.995 1.09902C10.1253 1.32892 11.1414 1.94238 11.8712 2.83552C12.6011 3.72866 12.9999 4.84659 13 6.00002C13 6.88002 13.32 10.2 14.22 12Z" />
            <path
              className="fill-secondary"
              d="M9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14H10C10 14.5304 9.78929 15.0391 9.41421 15.4142Z"
              fill="black"
            />
          </svg>
        </a>
        <div
          id="NotificationsDiv"
          className="dropdown-menu shadow rounded-4 border-0 p-0 m-0"
        >
          <div className="card w380" style={{ height: 250 }}>
            <div className="card-header p-3">
              <h6 className="card-title mb-0">Alerts Center</h6>
              <span className="badge bg-danger text-light">3</span>
            </div>
            <div className="tab-content card-body custom_scroll">
              <div className="tab-pane fade show active" role="tabpanel">
                <ul className="list-unstyled list mb-0">
                  <li className="py-2 mb-1 border-bottom">
                    <a href="javascript:void(0);" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-calendar fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Calendar</span>
                          <small>1HR</small>
                        </p>
                        <span>There's an upcoming of your teammate.</span>
                      </div>
                    </a>
                  </li>
                  <li className="py-2 mb-1 border-bottom">
                    <a href="javascript:void(0);" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-calendar-o fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Leaves</span>
                          <small>1DAY</small>
                        </p>
                        <span>Your leave request has been updated.</span>
                      </div>
                    </a>
                  </li>
                  <li className="py-2 mb-1 border-bottom">
                    <a href="javascript:void(0);" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-clock-o fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Attendance</span>
                          <small>1DAY</small>
                        </p>
                        <span>Your attendance request has been updated.</span>
                      </div>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="javascript:void(0);" className="d-flex">
                      <div className="avatar rounded-circle no-thumbnail">
                        <i className="fa fa-sign-out fa-lg" />
                      </div>
                      <div className="flex-fill ms-3">
                        <p className="d-flex justify-content-between mb-0">
                          <span>Separation</span>
                          <small>1HR</small>
                        </p>
                        <span>You got a separation reuqest.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="mngr_alerts.html"
              className="btn btn-primary text-light rounded-0"
            >
              View all alerts
            </a>
          </div>
        </div>
      </div>
        </>
    );
    return design;
}
export default HeaderDropDownMenu;