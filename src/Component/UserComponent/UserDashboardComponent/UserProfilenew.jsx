import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import { Link } from "react-router-dom";

export default function UserProfilenew() {
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;
  // api one data
  const [profileDataA, setprofileDataA] = useState();

  // api two data
  const [profileDataB, setprofileDataB] = useState(); 

  // api three data
  const [profileDataC, setprofileDataC] = useState();
  
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // api one
      const url = `https://laradebate.jmbliss.com/api/my-profile-details`;
      const responseData = await axios.get(url);
      console.log("API Response:", responseData?.data);

      // api two
      const urlA = `https://laradebate.jmbliss.com/api/my-contributions`;
      const responseDataA = await axios.get(urlA);
      console.log("API Response:", responseDataA?.data.userContributions);

      // api three
      const urlB = `https://laradebate.jmbliss.com/api/my-activity`;
      const responseDataB = await axios.get(urlB);
      console.log("API Response:", responseDataB?.data.activity);

      // api one data
      setprofileDataA(responseData?.data);
      // api two data
      setprofileDataB(responseDataA?.data?.userContributions);

      // api two data
      setprofileDataC(responseDataB?.data?.activity);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {loading ? (
        <div className="loaderStyle">
          <Loader />
        </div>
      ) : (
        <div className="profile-section pt-5">
          <div className="container d-flex d-flex-gap flex-column flex-md-row  mb-5 fw-light profile">
            <div className=" col-md-6  col-12  pt-5 pb-5">
              <div className="card-body card pb-5">
                <img
                  className="card-img-top a"
                  src={baseUrl + profileDataA?.profile_picture}
                  alt=""
                />
                <h2 className="card-title  text-center">
                  {profileDataA?.username}
                </h2>

                <p className="card-text mb-0 fw-bold opacity-75">joined:</p>
                <h5 className="card-title ">
                  {formatDate(profileDataA?.created_at)}
                </h5>

                <p className="card-text mb-0 mt-3 fw-bold opacity-75">
                  Thanks:
                </p>
                <h5 className="card-title ">
                  <i class="fa-solid fa-heart"></i> &nbsp;
                  {profileDataA?.total_received_thanks}
                </h5>

              <Link
                to="/my/user-setting"
                className="w-100 fw-bold  btn btn-lg btn-outline-primary mt-3"
              >
                Edit profile
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="statics">
              <p className="fw-bold opacity-75 mb-4">
                Statistics (Public Debates)
              </p>
              <div className="d-flex d-flex-gap">
                <div className="col-md-6  col-12 card-body text-center card mb-4">
                  <p>Claims</p>
                  <h4>{profileDataB?.totalClaims}</h4>
                </div>
                <div className="col-md-6  col-12 card-body text-center card mb-4">
                  <p>Contributions</p>
                  <h4>{profileDataB?.totalContributions}</h4>
                </div>
              </div>
              <div className="d-flex d-flex-gap">
                <div className="col-md-6  col-12 card-body text-center card mb-4">
                  <p>Comments</p>
                  <h4>{profileDataB?.totalComments}</h4>
                </div>
                <div className="col-md-6  col-12 card-body text-center card mb-4">
                  <p>Votes</p>
                  <h4>{profileDataB?.totalVotes}</h4>
                </div>
              </div>
            </div>

              <div className="activity">
                <p className="fw-bold opacity-75">Activity</p>

                {profileDataC &&
                  profileDataC.map((val, index) => (
                    <div className="">
                      <div className="d-flex m-3 mb-0 mt-4">
                        <div className="col-sm-4 p-2">
                          <i
                            class="fa fa-pencil bg-primary text-light rounded-circle p-2"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="col-sm-8 p-2">
                          <p className="m-0">{formatDate(val.created_at)}</p>
                        </div>
                      </div>

                      <div className="d-flex card-body text-left card mt-2 flex-row p-0">
                        <div className="col-3 ">
                          <img
                            className="w-100 h-100"
                            src={baseUrl + val?.image}
                            alt=""
                          />
                        </div>
                        <div className="col-9  p-4 ">
                          <h5 className="fw-bold">{val.title}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
