import React from "react";
import { Layout } from "../src/components/layout";
import ChiTietTour from "../src/screens/ChiTietTour";

export default function TourDetailPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <ChiTietTour />
      </div>
    </Layout>
  );
} 