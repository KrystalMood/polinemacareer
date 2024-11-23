"use client";
import React from "react";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer";
import ProfileContent from "../components/profile/content";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <ProfileContent />
      <Footer />
    </>
  );
}
