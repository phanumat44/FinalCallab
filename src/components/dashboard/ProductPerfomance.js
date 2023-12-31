import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import { useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
import Link from "next/link";
const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
];




const ProductPerfomance = () => {
  const { state, dispatch } = useContext(DataContext);
  const { users, auth, modal } = state;
  return (
    <BaseCard title="Product Perfomance">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
          
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Avatar
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Email
              </Typography>
            </TableCell>
            <TableCell >
              <Typography color="textSecondary" variant="h6">
                Admin
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.name}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {index + 1}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      <img
                      src={user.avatar}
                      alt={user.avatar}
                      style={{
                        width: "30px",
                        height: "30px",
                        overflow: "hidden",
                        objectFit: "cover",
                      }}
                    />
                    </Typography>
                    
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
              <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {user.name}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              {/* <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.pname}
                </Typography>
              </TableCell> */}
              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "primary.main",
                    color: "#fff",
                  }}
                  size="small"
                  label={user.email}
                ></Chip>
              </TableCell>
              <TableCell >
                <Typography variant="h6">{user.role === "admin" ? (
                      user.root ? (
                        <i className="fas fa-check text-success"> Root</i>
                      ) : (
                        <i className="fas fa-check text-success"></i>
                      )
                    ) : (
                      <i className="fas fa-times text-danger"></i>
                    )}</Typography>
              </TableCell>
              <TableCell align="right" className="cursor-pointer">
              
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      <Link
                      href={
                        auth.user.root && auth.user.email !== user.email
                          ? `/edit_user/${user._id}`
                          : "#!"
                      }
                    >
                      <a>
                        <i
                          className="fas fa-edit text-info mr-2"
                          title="Edit"
                        ></i>
                      </a>
                    </Link>

                    {auth.user.root && auth.user.email !== user.email ? (
                      <i
                        className="fas fa-trash-alt text-danger ml-2"
                        title="Remove"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() =>
                          dispatch({
                            type: "ADD_MODAL",
                            payload: [
                              {
                                data: users,
                                id: user._id,
                                title: user.name,
                                type: "ADD_USERS",
                              },
                            ],
                          })
                        }
                      ></i>
                    ) : (
                      <i
                        className="fas fa-trash-alt text-danger ml-2"
                        title="Remove"
                      ></i>
                    )}
                    </Typography>
                  </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default ProductPerfomance;
