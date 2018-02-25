import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import GithubIcon from "../../images/svg/github.svg";
import FacebookIcon from "../../images/svg/facebook.svg";
import TwitterIcon from "../../images/svg/twitter.svg";

const styles = theme => ({
  social: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      willChange: "opacity",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      transition: "opacity .5s",
      transitionDelay: ".7s",
      opacity: 1,
      position: "relative",
      transitionTimingFunction: "ease",
      ".navigatorInTransitionFrom &": {
        opacity: 1
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        transitionDelay: "0s",
        transition: "opacity .3s",
        opacity: 0
      }
    }
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.info.colors.socialIconsHover
      }
    }
  },
  svg: {
    width: "40px",
    height: "40px",
    fill: theme.info.colors.socialIcons,
    transition: "all .5s"
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    twitter: TwitterIcon,
    facebook: FacebookIcon,
    github: GithubIcon
  };

  return (
    <div className={classes.social}>
      {items.map(item => {
        const Icon = icons[item.name];
        return (
          <a
            href={item.url}
            key={item.name}
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <Icon className={classes.svg} />
          </a>
        );
      })}
    </div>
  );
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
