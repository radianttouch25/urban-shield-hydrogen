import { put } from "@vercel/blob";

// Function to upload a file to Vercel Blob
export async function uploadToBlob(path: string, content: string | Blob | ArrayBuffer | FormData) {
  try {
    const { url } = await put(path, content, { access: 'public' });
    return { success: true, url };
  } catch (error) {
    console.error("Error uploading to Vercel Blob:", error);
    return { success: false, error };
  }
}

// Example usage
export async function uploadHelloWorld() {
  const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
  return url;
}
