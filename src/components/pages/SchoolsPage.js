import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../utils/Api";
import Loading from "../utils/Loading";
import swal2 from "sweetalert2";

const SchoolsPage = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const linkToSchool = `/schools/`;
  const apiImgPath = "http://localhost:54719/images/";
  const linkToAddSchool = `/addschool`;

  const getSchools = async () => {
    try {
      const response = await Api.get("/schools");
      const schoolsFromAPI = response.data;
      setSchools(schoolsFromAPI);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getSchools();
  }, []);

  // return different statement if api not working
  if (loading) {
    return <Loading key={0} />;
  }

  return (
    <div className="container school-list text-center">
      <h3 className="display-3 font-weight-bolder" id="school-title">
        Schools
      </h3>
      <div className="school-cards row d-flex">
        {schools.map((school) => {
          const { id, name, photo } = school;

          return (
            <div key={id} className="col-lg-6 ">
              <div className="card mb-3 mt-3">
                <img
                  src={apiImgPath + photo}
                  className="card-img-top"
                  alt="school"
                />
                <div className="card-body ">
                  <h5 className="card-title minimum-height">
                    <a href={linkToSchool + school.id}>{name}</a>
                  </h5>
                  <p className="card-text">
                    Principal: {school.principal.name}
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to={{
                          pathname: `/schools/${id}/update`,
                        }}
                        className="btn custom-btn mt-0 mr-3"
                      >
                        Update
                      </Link>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn custom-btn mt-0"
                        onClick={() => {
                          swal2
                            .fire({
                              title: `Are you sure you wish to delete ${name}?`,
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3ec1d5",
                              cancelButtonColor: "#3f000f",
                              confirmButtonText: "Yes, delete school!",
                            })
                            .then(async (result) => {
                              if (result.isConfirmed) {
                                const response = await Api.delete(
                                  `/schools/${id}`
                                );
                                if (response.status === 204) {
                                  swal2
                                    .fire(
                                      "Deleted!",
                                      "Your school has been deleted.",
                                      "success"
                                    )
                                    .then(function () {
                                      window.location = `/schools`;
                                    });
                                }
                              }
                            });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        to={{
          pathname: linkToAddSchool,
        }}
        class="get-started-btn mb-5 mt-3"
      >
        Add School
      </Link>
    </div>
  );
};

export default SchoolsPage;
