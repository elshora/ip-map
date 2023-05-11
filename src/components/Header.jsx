import { faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationByIp } from "../features/location/locationSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [ip, setIp] = useState("");

  const { isLoading, isError, message } = useSelector(
    (state) => state.location
  );

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (ip.length) {
      dispatch(getLocationByIp(ip));
    }
  };

  return (
    <header className="header text-center">
      <h1 className="text-white title text-capitalize">IP address Tracker</h1>
      {isError ? <div className="alert alert-danger">{message}</div> : null}
      <form onSubmit={handelSubmit} className="my-3 form">
        <input
          type="text"
          onChange={(e) => setIp(e.target.value)}
          placeholder="Search for any IP address or domain"
        />
        <button>
          {isLoading ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
        </button>
      </form>
    </header>
  );
};

export default Header;
