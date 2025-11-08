// Hook to use zustand mutations to execute api calls.

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNote, deleteNote, fetchAllNotes, updateNote } from "../api/note";

const useNotes = () => {
  const queryClient = useQueryClient();

  const notesQuery = useQuery({
    queryKey: ["notes"],
    queryFn: fetchAllNotes,
  });

  const createNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => queryClient.invalidateQueries(["notes"]),
  });

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries(["notes"]),
  });

  const updateNoteMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload?: any }) =>
      updateNote(id, payload),
    onSuccess: () => queryClient.invalidateQueries(["notes"]),
  });

  return {
    notesQuery,
    createNoteMutation,
    updateNoteMutation,
    deleteNoteMutation,
  };
};

export default useNotes;
