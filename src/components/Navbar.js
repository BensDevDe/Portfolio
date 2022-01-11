import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <header>
      <NavLink to="/">
        <img className="navbar-logo" src="/images/Logo-BS.png" alt="Logo" />
      </NavLink>

      <Stack direction="row" spacing={1}>
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{ fontSize: "2em", color: "white", fontWeight: "100" }}
          >
            MENU
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="left-end"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper
                  sx={{
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    
                  }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                      // sx={{
                      //   height: "20vh",
                      // }}
                    >
                      <MenuItem
                        onClick={handleClose}
                        sx={{
                          fontSize: "0.8em",
                          lineHeight: "0.8em"
                        }}
                      >
                        {" "}
                        <NavLink className="nav-link" to="/">
                          {" "}
                          <li className="nav-element">
                            {" "}
                            <p>
                              HOME
                            </p>
                          </li>
                        </NavLink>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        sx={{
                          fontSize: "0.8em",
                        }}
                      >
                        <NavLink className="nav-link" to="/about">
                          {" "}
                          <li className="nav-element">
                            <p>
                             ABOUT
                            </p>
                          </li>
                        </NavLink>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        sx={{
                          fontSize: "0.8em",
                        }}
                      >
                        {" "}
                        <NavLink className="nav-link" to="/projects">
                          {" "}
                          <li className="nav-element">
                            <p>
                             PROJECTS
                            </p>
                          </li>
                        </NavLink>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        sx={{
                          fontSize: "0.8em",
                        }}
                      >
                        <NavLink className="nav-link" to="/contact">
                          {" "}
                          <li className="nav-element">
                            <p>
                              CONTACT
                            </p>
                          </li>
                        </NavLink>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </header>
    // <header>
    //   <NavLink to="/">
    //     <img src="/images/Logo-BS.png" alt="Logo" />
    //   </NavLink>
    //   <nav>
    //     <ul className="nav-container">
    //       <NavLink className="nav-link" to="/">
    //         {" "}
    //         <li className="nav-element">
    //           <p>
    //             <span>H</span>OME
    //           </p>
    //         </li>
    //       </NavLink>

    //       <NavLink className="nav-link" to="/about">
    //         {" "}
    //         <li className="nav-element">
    //           <p>
    //             <span>A</span>BOUT
    //           </p>
    //         </li>
    //       </NavLink>

    //       <NavLink className="nav-link" to="/projects">
    //         {" "}
    //         <li className="nav-element">
    //           <p>
    //             <span>P</span>ROJECTS
    //           </p>
    //         </li>
    //       </NavLink>

    //       <NavLink className="nav-link" to="/contact">
    //         {" "}
    //         <li className="nav-element">
    //           <p>
    //             <span>C</span>ONTACT
    //           </p>
    //         </li>
    //       </NavLink>
    //     </ul>
    //   </nav>
    // </header> */}
  );
};

export default Navigation;
