import Link, { LinkProps } from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

import { useBreadCrumbs } from "./useBreadCrumbs";

import "./breadCrumbs.scss";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => {
  return <Link {...props} component={RouterLink as any} />;
};

export const Breadcrumb = () => {
  const { location, breadcrumbNameMap, pathnames, clazz } = useBreadCrumbs();
  return (
    <div
      className={`breadcrumb ${
        location.pathname === "/" ? "fade" : ""
      } ${clazz}`}
    >
      <h3 className="bread_head">
        {breadcrumbNameMap[`${location.pathname}`]}
      </h3>
      <Breadcrumbs
        aria-label="breadcrumb"
        className={"bread"}
        separator={<ArrowRightRoundedIcon />}
      >
        {location.pathname !== "/" && (
          <LinkRouter underline="hover" color="inherit" to="/">
            <HomeRoundedIcon sx={{ color: "inherit" }} />
          </LinkRouter>
        )}

        {pathnames.map((_, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography
              color="text.primary"
              key={to}
              sx={{ color: "inherit", fontSize: "inherit" }}
            >
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <LinkRouter
              underline="hover"
              color="inherit"
              to={to}
              key={to}
              sx={{ color: "inherit", fontSize: "inherit" }}
            >
              {breadcrumbNameMap[to]}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};
