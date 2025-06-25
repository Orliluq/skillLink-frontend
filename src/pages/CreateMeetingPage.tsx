import React, { useState } from 'react';
import { type MeetingRequest, MeetingRelatedEntityType } from '../types/meeting.types';
import styles from './CreateMeetingPage.module.css';

const CreateMeetingPage: React.FC = () => {
  const [form, setForm] = useState<MeetingRequest>({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    locationUrl: '',
    relatedEntityType: 'GENERAL',
    relatedEntityId: undefined,
    attendeeUserIds: []
  });

  const [attendeeInput, setAttendeeInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddAttendee = () => {
    const id = parseInt(attendeeInput);
    if (!isNaN(id) && !form.attendeeUserIds?.includes(id)) {
      setForm(prev => ({
        ...prev,
        attendeeUserIds: [...(prev.attendeeUserIds || []), id]
      }));
      setAttendeeInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meeting to create:', form);
    // Aquí harías el POST a la API
  };

  return (
    <div className={styles.meetingContainer}>
      <h2 className={styles.meetingFormTitle}>Crear Nueva Reunión</h2>
      <form onSubmit={handleSubmit} className={styles.meetingForm}>
        <label>
          Título:
          <input name="title" value={form.title} onChange={handleChange} required />
        </label>

        <label>
          Descripción:
          <textarea name="description" value={form.description} onChange={handleChange} />
        </label>

        <label>
          Fecha y hora de inicio:
          <input type="datetime-local" name="startTime" value={form.startTime} onChange={handleChange} required />
        </label>

        <label>
          Fecha y hora de fin:
          <input type="datetime-local" name="endTime" value={form.endTime} onChange={handleChange} required />
        </label>

        <label>
          Enlace (Zoom, Meet, etc):
          <input name="locationUrl" value={form.locationUrl} onChange={handleChange} />
        </label>

        <label>
          Tipo de Entidad Relacionada:
          <select name="relatedEntityType" value={form.relatedEntityType} onChange={handleChange}>
            {Object.values(MeetingRelatedEntityType).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label>
          ID de entidad relacionada:
          <input
            type="number"
            name="relatedEntityId"
            value={form.relatedEntityId || ''}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </label>

        <label>
          ID de Usuario Invitado:
          <input
            type="number"
            value={attendeeInput}
            onChange={(e) => setAttendeeInput(e.target.value)}
          />
          <button className={styles.meetingSubmitButton} type="button" onClick={handleAddAttendee}>Agregar</button>
        </label>

        {form.attendeeUserIds && form.attendeeUserIds.length > 0 && (
          <div className={styles.attendeesList}>
            <strong>Invitados:</strong>
            <ul>
              {form.attendeeUserIds.map((id, index) => (
                <li key={index}>Usuario #{id}</li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" className={styles.meetingSubmitButton}>Crear Reunión</button>
      </form>
    </div>
  );
};

export default CreateMeetingPage;
