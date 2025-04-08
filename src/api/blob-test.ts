import { put } from "@vercel/blob";

// This is a simple API function that can be used to test Vercel Blob
export async function testBlobUpload() {
  try {
    const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
    return { success: true, url };
  } catch (error) {
    console.error("Error uploading to Vercel Blob:", error);
    return { success: false, error };
  }
}
