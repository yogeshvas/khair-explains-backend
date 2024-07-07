import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // Cookie accessible only via HTTP(S)
    sameSite: "strict", // Restrict cross-origin usage
    secure: process.env.NODE_ENV === "production", // Set to true in production (HTTPS)
  });
};
