import React, { useEffect, useState, useContext } from "react";

import ServerList from "../components/ServerList";
import ErrorModal from "../../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/UIElements/LoadingSpinner";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { Table, Pagination } from "react-bootstrap";
import { API_ENDPOINT } from "../../../shared/Util/API_CONSTANTS";

import "./ServersCreated.css";

const ServersCreated = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedServers, setLoadedServers] = useState();

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const responseData = await sendRequest(API_ENDPOINT.GET_SERVERS);
        console.log(responseData.servidores);
        setLoadedServers(responseData.servidores);
      } catch (error) {
        console.log("Error server not found");
        console.log(error);
      }
    };
    fetchServers();
  }, [sendRequest]);

  //PAGINATION

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedServers && <ServerList items={loadedServers} />}
    </React.Fragment>
  );
};

export default ServersCreated;
