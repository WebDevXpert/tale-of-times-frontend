"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditArticle() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`
        );
        setTitle(response.data.title);
        setContent(response.data.content);
        setDescription(response.data.description);
        setCurrentImage(
          response.data.image
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${response.data.image}`
            : ""
        );
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  const updateArticle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("description", description);

    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      router.push("/admin");
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Article</h1>
      <form onSubmit={updateArticle} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            rows="2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          {currentImage && (
            <div>
              <img
                src={currentImage}
                alt="Current Article Image"
                className="w-full h-auto mb-4"
              />
            </div>
          )}
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
