"use client";

import ColorPicker from "@/components/colorPicker/page";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#fde047");

  const router = useRouter();

  const createNote = async (e: any) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        color,
      }),
    });

    router.refresh();

    setTitle("");
    setContent("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div id="nyttNotatIkon"></div>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={createNote}>
          <div className="flex flex-col mb-4">
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="content">Content</label>
            <Textarea
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex mb-4">
            <input
              type="color"
              name="color"
              id="color"
              defaultValue="#fde047"
              onChange={(e) => setColor(e.target.value)}
            />
            <ColorPicker />
          </div>
          <Button type="submit" variant={"default"}>
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
