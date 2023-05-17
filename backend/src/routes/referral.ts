import express from "express";
import ReferralController from "../controller/ReferralController";

const referralController = new ReferralController();
const router = express.Router();

router.get("/referral/:id", (...args) => {
  console.log("Router");
  referralController.getReferral(...args);
});

router.put("/referral/:id", (...args) =>
  referralController.updateReferral(...args)
);

module.exports = { router, basePath: "/api" };
