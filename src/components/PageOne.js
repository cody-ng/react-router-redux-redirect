import React from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "./IconButton";
import { usePageContext, usePageDispatchContext } from "../hooks/PageContext";
import { signal_redirect, clear_redirect } from "../reducers/ActionCreators";

const PageOne = () => {
  const pageContext = usePageContext();
  const dispatch = usePageDispatchContext();

  const onClickCB = (e) => {
    const path = "two";
    dispatch(signal_redirect(path));
    console.log("onClickCB");
  };

  if (pageContext.isRedirectedToNewPage) {
    let newPath = pageContext.redirectPagePath;
    console.log("PageOne - redirecting to " + newPath);

    dispatch(clear_redirect());
    return <Redirect to={newPath} />;
  }

  return (
    <>
      {/* <FontAwesomeIcon icon={["fas", "forward"]} /> */}
      <Row>
        <Col>"Click the button below to be redirected to Page Two"</Col>
      </Row>
      <Row>
        <Col>
          <GoToPageTwo onClickCB={onClickCB} />
        </Col>
      </Row>
    </>
  );
};

function GoToPageTwo(props) {
  const tt = "Go to Page Two";

  return IconButton({
    id: "go-to-page-two-button",
    tooltip: tt,
    iconName: "forward",
    onClickCB: props.onClickCB,
    disabled: props.disabled,
    label: "Go to page two",
  });
}

export default PageOne;
