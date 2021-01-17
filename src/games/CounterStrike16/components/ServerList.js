import React, { useState } from "react";
import ServerItem from "./ServerItem";
import Card from "../../../shared/UIElements/Card";

import { ListGroup } from "react-bootstrap";
import Pagination from "../../../shared/UIElements/Pagination";

import "bootstrap/dist/css/bootstrap.css";
import "./ServerList.css";

const ServerList = (props) => {
  const [items, setItems] = useState();
  const [pageItem, setpageItem] = useState([]);

  if (props.items.length === 0) {
    return (
      <div className="server-list center">
        <Card>
          <h2>No server found</h2>
        </Card>
      </div>
    );
  }

  const servidores = props.items.map((vm) => (
    <ListGroup.Item className="border-0 .mx-auto">
      <ServerItem
        // image={server.imageUrl}
        // imageTitle={server.imageTitle}
        map={vm.server.map}
        name={vm.server.name}
        players={vm.server.players}
        ip={vm.server.connect}
        ping={vm.server.ping}
        id={vm.id}
      />
    </ListGroup.Item>
  ));
  return (
    <React.Fragment>
      <Pagination items={servidores}>{servidores}</Pagination>
    </React.Fragment>
  );
};

export default ServerList;
