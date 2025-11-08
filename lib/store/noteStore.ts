import { create } from "zustand";
import { NoteStore } from "../const/types";

const useNoteStore = create<NoteStore>((set) => ({
  editableNote: null,
  setEditableNote: (note) => set({ editableNote: note }),

  isModalOpen: false,
  setIsModalOpen: (state) => set({ isModalOpen: state }),

  notes: [],
  setNotes: (notes) => set({ notes }),
}));

export { useNoteStore };
