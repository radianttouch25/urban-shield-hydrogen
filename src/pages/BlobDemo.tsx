import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobUploader from "@/components/BlobUploader";

const BlobDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Helmet>
        <title>Vercel Blob Demo | Urban Shield</title>
        <meta name="description" content="Demonstration of Vercel Blob storage capabilities" />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Vercel Blob Storage Demo</h1>
          
          <div className="mb-10">
            <p className="text-lg text-center mb-8">
              This page demonstrates how to use Vercel Blob for file storage and uploads.
            </p>
            
            <BlobUploader />
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 mt-12">
            <h2 className="text-xl font-semibold mb-4">About Vercel Blob</h2>
            <p className="mb-4">
              Vercel Blob is a storage solution for files, images, and other assets. It provides:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Global edge storage for your files</li>
              <li>Automatic CDN caching</li>
              <li>Simple API for uploads and downloads</li>
              <li>Public and private access controls</li>
              <li>Integration with Vercel deployments</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlobDemo;
