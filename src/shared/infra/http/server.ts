import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";

import "@shared/infra/container";
import "@shared/infra/typeorm";

import { errors, isCelebrateError } from "celebrate";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import AppError from "../errors/AppError";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(errors());

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  if (isCelebrateError(error)) {
    return response.status(400).json({
      status: "Wrong Parameters",
      message: error.message,
      details: error.details,
    });
  }
  console.log(error);
  return response.status(500).json({
    status: 500,
    message: "internal server error",
  });
});

app.listen(3333, () => {
  console.log("Microsservice idealdisc");
});
