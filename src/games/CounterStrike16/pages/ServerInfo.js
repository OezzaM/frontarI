import React, { useEffect, useState, useRef } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import Button from "../../../shared/FormElements/Button";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import ErrorModal from "../../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/UIElements/LoadingSpinner";
//
import useCopyToClipboard from "../../../shared/hooks/copy-clipboard-hook";
import Card from "../../../shared/UIElements/Card";
import GameInfo from "../components/GameInfo";
import { Overlay, Tooltip, Button as Boton } from "react-bootstrap";
import { API_ENDPOINT } from "../../../shared/Util/API_CONSTANTS";

import "./ServerInfo.css";

const ServerInfo = (props) => {
  const [loadedServer, setLoadedServer] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isCopied, handleCopy, show, setShow] = useCopyToClipboard(); //cpy clipboard
  const target = useRef(null); //
  const ref = useRef(null); //
  const serverId = useParams().serverId;
  // const history = useHistory() PARA EL ELIMINAR

  useEffect(() => {
    const fetchServer = async () => {
      try {
        const responseData = await sendRequest(
          API_ENDPOINT.GET_SERVERS + serverId
        );
        setLoadedServer(responseData.server);
        console.log(responseData.server);
      } catch (err) {}
    };
    fetchServer();
  }, [sendRequest, serverId]);

  const handleDelete = async () => {
    console.log("Aca elimino el servidor");
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedServer && (
        <div>
          <Card className="ServerInfo">
            <div className="imageServer">
              <img
        src={`https://storage.cloud.google.com/cs16_images/${loadedServer.map}`}
                alt="#"
                className="pic"
              />
            </div>
            <div className="dataServer">
              <p>Hostname: {loadedServer.name}</p>
              <p>
                Players: {loadedServer.players.length} /{" "}
                {loadedServer.maxplayers}
              </p>
              <p>IP: {loadedServer.connect}</p>
              <p>Ping: {loadedServer.ping}</p>
            </div>
            <div className="serverButtons" ref={ref}>
              <Button href={`steam://connect/${loadedServer.connect}`}>
                Unirse
              </Button>
              <Boton
                ref={target}
                onClick={() => handleCopy(loadedServer.connect)}
              >
                Copiar IP
              </Boton>
              <Overlay
                target={target.current}
                show={show}
                placement="bottom"
                container={this}
                onEntering={() => {
                  setTimeout(() => {
                    setShow(!show);
                  }, 500);
                }}
              >
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    Copiado!
                  </Tooltip>
                )}
              </Overlay>
              <Button estilo="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </div>
            {/* {isCopied && <p>Copiado!</p>} */}
          </Card>
          <Card className="gameInfo">
            <GameInfo items={loadedServer.players} />
          </Card>
        </div>
      )}
    </React.Fragment>
  );
};

export default ServerInfo;
