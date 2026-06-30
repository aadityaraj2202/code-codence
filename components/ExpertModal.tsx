"use client";

import { useState } from "react";
import styles from "./ExpertModal.module.css";

export default function ExpertModal({ isOpen, onClose }: any) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    status: "",
    course: "",
    experience: "",
    goal: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  if (!isOpen) return null;

  // handle change
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 FINAL SUBMIT FUNCTION
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.text();
      console.log("Response:", data);

      setSuccess(true);

      // reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        status: "",
        course: "",
        experience: "",
        goal: "",
      });

      // auto close modal after 2 sec
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

    return (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>

        {/* Close Button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>

        <div className={styles.headerText}>
          <h2 id="expert-modal-title">Book Your Free Career Consultation</h2>
          <p className={styles.subtitle}>Get personalized guidance from our experts</p>
        </div>


        {success ? (
          <div className={styles.success}>
            ✅ Submitted Successfully! <br />
            Our team will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.formGrid}>

  {/* Row 1 */}
  <div className={styles.formRow}>
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor="expert-name">Full Name</label>
      <input
        id="expert-name"
        className={styles.input}
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor="expert-phone">Phone Number</label>
      <input
        id="expert-phone"
        className={styles.input}
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className={styles.inputGroup}>
    <label className={styles.label} htmlFor="expert-email">Email</label>
    <input
      id="expert-email"
      className={styles.input}
      name="email"
      value={form.email}
      onChange={handleChange}
      required
    />
  </div>

  {/* Row 3 */}
  <div className={styles.inputGroup}>
    <label className={styles.label} htmlFor="expert-status">Current Status</label>
    <select
      id="expert-status"
      className={styles.select}
      name="status"
      value={form.status}
      onChange={handleChange}
      required
    >
      <option value="">Select</option>
      <option>Student</option>
      <option>Working</option>
    </select>
  </div>

  {/* Row 4 */}
  <div className={styles.inputGroup}>
    <label className={styles.label} htmlFor="expert-course">Interested Course</label>
    <select
      id="expert-course"
      className={styles.select}
      name="course"
      value={form.course}
      onChange={handleChange}
      required
    >
      <option value="">Select</option>
      <option>Data Science</option>
      <option>Web Dev</option>
    </select>
  </div>

  {/* Row 5 */}
  <div className={styles.inputGroup}>
    <label className={styles.label} htmlFor="expert-experience">Experience Level</label>
    <select
      id="expert-experience"
      className={styles.select}
      name="experience"
      value={form.experience}
      onChange={handleChange}
      required
    >
      <option value="">Select</option>
      <option>Beginner</option>
      <option>Intermediate</option>
    </select>
  </div>

  {/* Row 6 */}
  <div className={styles.inputGroup}>
    <label className={styles.label} htmlFor="expert-goal">Career Goal</label>
    <select
      id="expert-goal"
      className={styles.select}
      name="goal"
      value={form.goal}
      onChange={handleChange}
      required
    >
      <option value="">Select</option>
      <option>Job</option>
      <option>Skill Upgrade</option>
    </select>
  </div>

  {/* Submit */}
  <button className={styles.submitButton} disabled={loading}>
    {loading ? "Submitting..." : "Schedule My Free Consultation"}
  </button>

</form>
        )}
      </div>
    </div>
  );
}