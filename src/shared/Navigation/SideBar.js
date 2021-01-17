import React from "react";
import { Button, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function exampleReducer(state, action) {
  switch (action.type) {
    case "CHANGE_ANIMATION":
      return { ...state, animation: action.animation, visible: !state.visible };
    case "CHANGE_DIMMED":
      return { ...state, dimmed: action.dimmed };
    case "CHANGE_DIRECTION":
      return { ...state, direction: action.direction, visible: false };
    default:
      throw new Error();
  }
}

const SidebarExampleTransitions = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: "overlay",
    direction: "left",
    dimmed: false,
    visible: false,
  });

  const { animation, dimmed, direction, visible } = state;

  const buttonHandler = () => {
    dispatch({ type: "CHANGE_ANIMATION", animation: "push" });
    console.log(state);
  };

  return (
    <div>
      {/* <Button onClick={buttonHandler}>Test</Button> */}

      <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
        <Sidebar
          as={Menu}
          animation={animation}
          direction={direction}
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
        {/* <Sidebar.Pusher dimmed={dimmed && visible}> */}
        {props.children}
        {/* </Sidebar.Pusher> */}
      </Sidebar.Pushable>
    </div>
  );
};
export default SidebarExampleTransitions;
