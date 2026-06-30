"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import trainerService, { type TrainerRecord } from "../../services/trainerService";
import styles from "./page.module.css";

interface Trainer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  // Add other fields as needed
}

export default function TrainersPage() {
  const router = useRouter();
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Trainer | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phoneNumber: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    fetchTrainers();
  }, [router]);

  const fetchTrainers = async () => {
    try {
      const data = await trainerService.getTrainers();
      const mapped = (data ?? []).map((trainer: TrainerRecord, idx: number) => ({
        id: typeof trainer.id === "number" ? trainer.id : idx + 1,
        name: typeof trainer.name === "string" ? trainer.name : "",
        email: typeof trainer.email === "string" ? trainer.email : "",
        phoneNumber:
          typeof trainer.phoneNumber === "string"
            ? trainer.phoneNumber
            : typeof trainer.phone === "string"
              ? trainer.phone
              : "",
      }));
      setTrainers(mapped);

    } catch (err) {
      console.error("Failed to fetch trainers", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    try {
      await trainerService.addTrainer(form);
      setForm({ name: "", email: "", phoneNumber: "" });
      fetchTrainers();
    } catch (err) {
      console.error("Failed to add trainer", err);
    }
  };

  const handleEdit = (trainer: Trainer) => {
    setEditing(trainer);
    setForm({ name: trainer.name, email: trainer.email, phoneNumber: trainer.phoneNumber });
  };

  const handleUpdate = async () => {
    if (!editing) return;
    try {
      await trainerService.updateTrainer(editing.id, form);
      setEditing(null);
      setForm({ name: "", email: "", phoneNumber: "" });
      fetchTrainers();
    } catch (err) {
      console.error("Failed to update trainer", err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await trainerService.deleteTrainer(id);
      fetchTrainers();
    } catch (err) {
      console.error("Failed to delete trainer", err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <h1>Trainers</h1>
      <div>
        <h2>{editing ? "Edit Trainer" : "Add Trainer"}</h2>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
        />
        <button onClick={editing ? handleUpdate : handleAdd}>
          {editing ? "Update" : "Add"}
        </button>
        {editing && <button onClick={() => { setEditing(null); setForm({ name: "", email: "", phoneNumber: "" }); }}>Cancel</button>}
      </div>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            {trainer.name} - {trainer.email} - {trainer.phoneNumber}
            <button onClick={() => handleEdit(trainer)}>Edit</button>
            <button onClick={() => handleDelete(trainer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}