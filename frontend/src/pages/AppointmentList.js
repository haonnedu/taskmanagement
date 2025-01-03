import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/appointments/all');
        setAppointments(response.data);
      } catch (error) {
        console.error('Failed to fetch appointments', error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment List</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patientName} - {appointment.doctorName} - {appointment.appointmentTime} - {appointment.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
