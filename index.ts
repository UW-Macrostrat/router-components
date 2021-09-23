import h from "@macrostrat/hyper";
import { NavLink, withRouter, Link } from "react-router-dom";
import { AnchorButton } from "@blueprintjs/core";
import classNames from "classnames";
import { LinkCard as LinkCard_ } from "@macrostrat/ui-components";

// Button that forms a React Router link
const LinkButton = withRouter(function (props: any) {
  let { to, history, staticContext, onClick, match, location, ...rest } = props;

  return h(AnchorButton, {
    onClick(event: any) {
      if (to == null) {
        return;
      }
      history.push(to);
      event.preventDefault();
    },
    ...rest,
  });
});

const NavLinkButton = function (props: any) {
  let { className, minimal = true, large = false, ...rest } = props;
  className = classNames(className, "bp3-button", {
    "bp3-minimal": minimal,
    "bp3-large": large,
  });
  return h(NavLink, { className, ...rest });
};

const LinkCard = (props: any) =>
  h(LinkCard_, { linkComponent: Link, ...props });

export { LinkButton, NavLinkButton, LinkCard };
