import API from "./config";

const fetchAllNotes = async () => {
  const res = await API.get("/notes/all");
  return res.data;
};
const fetchParticularNote = async (id: string) => {
  const res = await API.get(`/notes/${id}`);
  return res.data;
};
const createNote = async (data: any) => {
  const res = await API.post("/notes", data);
  return res.data;
};
const updateNote = async (id: string) => {
  const res = await API.put(`/notes/${id}`);
  return res.data;
};
const deleteNote = async (id: string) => {
  const res = await API.delete(`/notes/${id}`);
  return res.data;
};

export {
  createNote,
  deleteNote,
  fetchAllNotes,
  fetchParticularNote,
  updateNote,
};
