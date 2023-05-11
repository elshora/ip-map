import React from "react";
import { useSelector } from "react-redux";
import DataPiece from "./DataPiece";

const Data = () => {
  const { locationData, isSuccess } = useSelector((state) => state.location);
  return (
    <section className="data bg-white  shadow container my-5 p-4">
      {isSuccess ? (
        <>
          <div className="row">
            <DataPiece title={"IP Adress"} content={locationData?.ip} />
            <DataPiece
              title={"Location"}
              content={`${locationData?.location.region}, ${locationData?.as?.asn}`}
            />
            <DataPiece
              title={"TimeZone"}
              content={`UTC ${locationData?.location.timezone}`}
            />
            <DataPiece title={"ISP"} content={locationData?.isp} />
          </div>
        </>
      ) : (
        <p className="text-center fs-1 mb-0 text-muted">Add IP address</p>
      )}
    </section>
  );
};

export default Data;
