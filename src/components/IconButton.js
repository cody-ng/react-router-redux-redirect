import React from "react";
import PropTypes from "prop-types";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({
  id,
  tooltip,
  iconName,
  //iconColor,
  onClickCB,
  label,
  disabled = false,
}) => {
  //let style = { color: iconColor }

  // let bsClassStyle = (isBlinking ? "buttonClassStyle " + "blink" : buttonClassStyle);
  let tt = tooltip;
  if (disabled === true) {
    tt = "";
  }
  //key={id + "-action-tooltip"}
  const tooltipId = id + "action-tooltip";

  const renderTooltip = (props) => <Tooltip id={tooltipId}>{tt}</Tooltip>;

  return (
    <OverlayTrigger
      overlay={renderTooltip}
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
    >
      <Button
        key={id + "-action-button"}
        onClick={onClickCB}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={["fas", iconName]} key={id + "-action-icon"} />
        {label ? " " + label : ""}
      </Button>
    </OverlayTrigger>
  );
};

IconButton.propTypes = {
  id: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  // buttonClassStyle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  // iconColor: PropTypes.string.isRequired,
  //isBlinking: PropTypes.bool.isRequired,
  onClickCB: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default IconButton;
